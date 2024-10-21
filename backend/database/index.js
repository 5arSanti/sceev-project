const sql = require("mssql");


const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');

const sqlConfig = {
	user: `${properties.get('app.database.user')}`,
	password: `${properties.get('app.database.password')}`,
	database: `${properties.get('app.database.database')}`,
	server: `${properties.get('app.database.server')}`,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	},
	options: {
		trustServerCertificate: true,
		encrypt: false
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