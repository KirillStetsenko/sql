import express from 'express';
import mysql from 'mysql2';
import mysqlAdmin from 'node-mysql-admin';

const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'Skiper',
	password: '123456',
	database: 'mysql',
});

connection.connect((err) => {
	if (err) {
		console.error('Connection error', err.stack);
		return;
	}
	console.log('Connection to database as id' + connection.threadId);
});

const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to the MySQL Admin Dashboard');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mysqlAdmin(app));

app.listen(3000, () => console.log('Server works at port 3000'));
