/*

-- Create the database
CREATE DATABASE corte_lazer;

-- Use the newly created database
USE corte_lazer;

-- Create an enhanced users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15) CHECK (phone_number REGEXP 'your-regex-pattern-for-phone'),
    google_token_hash CHAR(64),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create an enhanced file records table
CREATE TABLE file_records (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    file_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    file_hash CHAR(64),
    file_size BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


*/


import loginRouter from './login.routes'

const router = Router();

// Ruta API principal --> base path: /api

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bienvenido al API de Cortelaser',
        users: {
            allUsers: 'GET /api/users',
            userById: 'GET /api/users/:userID',
            userByUsername: 'GET /api/users/username/:username',
            createUser: 'POST /api/users',
            updateUser: 'PUT /api/users/user:id',
            deleteUser: 'DELETE /api/users/user:id',
        },
        file_records: {
            allRecords: 'GET /api/files',
            recordById: 'GET /api/files/:recordID',
            recordsByUserId: 'GET /api/files/user/:userID',
            createRecord: 'POST /api/files',
            updateRecord: 'PUT /api/files/record:id',
            deleteRecord: 'DELETE /api/files/record:id',   
        },
    });
} );

// Rutas para los usuarios --> base path: /api/users

router.use('/login', loginRouter);

// Rutas para los registros --> base path: /api/files

router.use('/files', filesRouter);