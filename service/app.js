import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet'; 
import dotenv from 'dotenv';
import router from './app/routes/index.js';

const app = express();
dotenv.config();

// Middleware para las solicitudes HTTP
app.use(morgan('dev'));

// Middleware para habilitar CORS y evitar problemas de informacion cruzada
app.use(cors());

// Middleware de Helmet para establecer cabeceras de seguridad
app.use(helmet());

// Middleware para habilitar el uso de JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode ${process.env.NODE_ENV === "production"
        ? process.env.PROD_URL
        : process.env.DEV_URL
        }`
    );
});
