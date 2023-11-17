
/*

CREATE DATABASE corte_lazer;

USE corte_lazer;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15) CHECK (phone_number REGEXP 'your-regex-pattern-for-phone'),
    google_token_hash CHAR(64),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

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

import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host:
        process.env.NODE_ENV === 'production'
        ? process.env.PROD_DB_HOST 
        : process.env.DEV_DB_HOST,
    username: process.env.DB_USER,
    password:
     process.env.NODE_ENV === 'production'
        ? process.env.PROD_DB_PASSWORD 
        : process.env.DEV_DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: 'mysql',
        port: dbConfig.port,
        define: {
            timestamps: false,
        },
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

export default sequelize;