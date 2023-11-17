import Sequelize from 'sequelize';
import sequelize from 'config/database.js'; // Para cuando importemos la config de base de datos

/*

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(15) CHECK (phone_number REGEXP 'your-regex-pattern-for-phone'),
    google_token_hash CHAR(64),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

*/

const User = sequelize.define('users', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
    },
    phone_number: {
        type: Sequelize.STRING(15),
        allowNull: true,
        unique: true,
    },
    google_token_hash: {
        type: Sequelize.CHAR(64),
        allowNull: true,
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
});

export default User;