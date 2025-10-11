const sql = require("mssql");

const sqlConfig = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	server: process.env.DB_SERVER,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	},
	options: {
		trustServerCertificate: true,
		encrypt: true
	}
}

let connectionAttempts = 0;
const MAX_ATTEMPTS = 10;
const RETRY_INTERVAL = 20000;

/**
 * Establece la conexión a MSSQL con reintentos exponenciales controlados.
 * Reinicia el contador en conexiones exitosas y reintenta ante errores.
 */
const connectToDatabase = async () => {
    try {
        await sql.connect(sqlConfig);
        console.log('Conexión a la base de datos exitosa');
        connectionAttempts = 0; // Resetear contador al conectar exitosamente
    } catch (err) {
        console.error('Error al conectar a la base de datos MSSQL:', err);
        
        if (connectionAttempts < MAX_ATTEMPTS) {
            connectionAttempts++;
            console.log(`Intento de reconexión ${connectionAttempts} de ${MAX_ATTEMPTS} en ${RETRY_INTERVAL/1000} segundos...`);
            setTimeout(connectToDatabase, RETRY_INTERVAL);
        } else {
            console.error('Se alcanzó el número máximo de intentos de conexión');
        }
    }
};

// Iniciar la conexión
connectToDatabase();

// Manejar errores de conexión después de la conexión inicial
sql.on('error', (err) => {
    console.error('Error en la conexión a la base de datos:', err);
    if (connectionAttempts < MAX_ATTEMPTS) {
        connectionAttempts++;
        console.log(`Intento de reconexión ${connectionAttempts} de ${MAX_ATTEMPTS} en ${RETRY_INTERVAL/1000} segundos...`);
        setTimeout(connectToDatabase, RETRY_INTERVAL);
    }
});

module.exports = { sql };