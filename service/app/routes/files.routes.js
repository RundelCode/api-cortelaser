import User from '../models/user.model.js';
import FileRecord from '../models/file.model.js';

const filesRouter = express.Router();

// Rutas para los registros --> base path: /api/files

// Peticiones GET

// Obtener todos los registros

filesRouter.get('/', async (req, res) => {
    try {
        const fileRecords = await FileRecord.findAll();
        res.status(200).json(fileRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un registro por su ID

filesRouter.get('/:recordID', async (req, res) => {
    try {
        const fileRecord = await FileRecord.findByPk(req.params.recordID);
        res.status(200).json(fileRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todos los registros de un usuario por su ID

filesRouter.get('/user/:userID', async (req, res) => {
    try {
        const fileRecords = await FileRecord.findAll({
            where: {
                user_id: req.params.userID,
            }
        });
        res.status(200).json(fileRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Peticiones POST

// Crear un nuevo registro

filesRouter.post('/', async (req, res) => {
    try {
        const newFileRecord = await FileRecord.create(req.body);
        res.status(201).json(newFileRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Peticiones PUT

// Actualizar un registro 

filesRouter.put('/:recordID', async (req, res) => {
    try {
        const updatedFileRecord = await FileRecord.update(req.body, {
            where: {
                record_id: req.params.recordID,
            }
        });
        res.status(200).json(updatedFileRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Peticiones DELETE

// Eliminar un registro

filesRouter.delete('/:recordID', async (req, res) => {
    try {
        const deletedFileRecord = await FileRecord.destroy({
            where: {
                record_id: req.params.recordID,
            }
        });
        res.status(200).json(deletedFileRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});