import Sequelize from 'sequelize';
import sequelize from 'config/database.js'; // Para cuando importemos la config de base de datos

/*

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

const FileRecord = sequelize.define('file_records', {
    record_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    file_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    file_path: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    uploaded_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    file_hash: {
        type: Sequelize.CHAR(64),
        allowNull: true,
    },
    file_size: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
});

export default FileRecord;