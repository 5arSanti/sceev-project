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

sql.connect(sqlConfig, (err) => {
	if (err) {
		console.error('Error al conectar a la base de datos MSSQL:', err);
		return;
	} else {
		console.log('Conexión a la base de datos exitosa');
	}
});


module.exports = { sql };