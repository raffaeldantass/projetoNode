const mysql = require('mysql')
module.exports = () => {
	return mysql.createConnection({
			user: 'root',
			password: 'root',
			database: 'cdc',
			host: 'localhost'
	})
}