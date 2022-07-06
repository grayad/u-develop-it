// require modules
const express = require('express');
const mysql = require('mysql2');

// designate PORT and initialize app
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'election'
    },
    console.log('Connected to the election database.')
);

// queries
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// get a single candidate
// db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// delete a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
});

// Default response for any other request (Not Found)
// catchall route, so must be placed below other routes or will override
app.use((req, res) => {
    res.status(404).end();
});

// start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
