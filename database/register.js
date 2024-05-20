const mysql = require('mysql2');
const connection = require('./connection');

// A simple SELECT query
 function addUser(username, email, password){
    const query = 'INSERT INTO `users`(`username`, `email`, `password`) VALUES (?, ?, ?)';
    const values = [username, email, password];
    connection.execute(query, values, (err, result, fields) => {
        if (err instanceof Error) {
          console.log(err);
          return;
        }
      
        console.log(result);
        console.log(fields);
    });
}

module.exports = addUser;
