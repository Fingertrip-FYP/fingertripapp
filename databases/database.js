import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '127.0.0.1:3306',
  user: 'root',
  password: 'ShinigamiLeo3000@',
  database: 'fingertrip',
});

connection.connect((error) => {
  if (error) {
    console.log('Error connecting to database:', error);
  } else {
    console.log('Connected to database.');
  }
});
