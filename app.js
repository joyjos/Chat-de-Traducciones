// Importar dependencias
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai"

// Cargar configuración API Key
dotenv.config();

// Cargar Express
const app = express();
const PORT = process.env.PORT || 3000;

// Servir FrontEnd
app.use("/", express.static("public"));

// Middleware para procesar JSON (convierto JSON a un Objeto de JavaScript)
app.use(express.json);

// Instancia de OpenAI y pasarle el API Key


// Ruta/endpoint/url

    // Funcionalidad de traducir con IA
    // Llamar al LLM o modelo de OpenAI


// Servir el BackEnd
app.listen(PORT, () =>  {
    console.log("Servidor corriendo correctamente en http://localhost:" + PORT);
});