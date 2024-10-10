import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
	host: 'localhost',
	user: 'Skiper',
	password: '123456',
	database: 'mybase',
});

let query = 'SELECT name FROM users WHERE age = 27';

try {
	let [results] = await connection.query(query);
	console.log(results);
} catch (err) {
	console.log('Error', err);
}
