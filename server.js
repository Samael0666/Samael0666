const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// MySQL database connection configuration
const connection = mysql.createConnection({
    host: 'localhost',         // Usually 'localhost'
    user: 'root',     // Your MySQL username
    password: 'Lucifer@666', // Your MySQL password
    database: 'Details'  // Your MySQL database name
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as ID: ' + connection.threadId);
});

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to add an employee to the database
app.post('/addEmployee', (req, res) => {
    const employeeData = req.body;

    // Insert employee data into the MySQL database
    connection.query('INSERT INTO Details SET ?', employeeData, (error, results, fields) => {
        if (error) {
            console.error('Error inserting employee data: ' + error);
            res.status(500).send('Error inserting employee data');
            return;
        }
        console.log('Employee added successfully!');
        res.send('Employee added successfully!');
    });
});

// Error handling for MySQL
connection.on('error', (err) => {
    console.error('MySQL database error: ' + err.message);
});

// Close MySQL connection on application termination
process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection: ' + err.message);
        }
        process.exit(0);
    });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
