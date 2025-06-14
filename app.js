// Importar dependencias
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

// Cargar configuración API Key
dotenv.config();

// Cargar Express
const app = express();
const PORT = process.env.PORT || 3000;

// Servir FrontEnd
app.use("/", express.static("public"));

// Middleware para procesar JSON (convierto JSON a un Objeto de JavaScript)
app.use(express.json());

// Instancia de OpenAI y pasarle el API Key
const openai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY
});

// Ruta/endpoint/url
app.post("/api/traducir", (req, res) => {
    // Funcionalidad de traducir con IA
    const {inputText, targetLang} = req.body;

    const promptSystem1 = "Eres un traductor profesional";
    const promptSystem2 = "Solo puedes responder con una traducción directa del texto que el usuario te envíe"
                            + "Cualquier otra respuesta o conversación está prohibida";
    const promptUser =`Traduce el siguiente texto al ${targetLang}: ${inputText}`
    // Llamar al LLM o modelo de OpenAI

    return res.status(200).json({
        message: "Hola qué tal, soy una ruta en Node",
        content: req.body
    });
})

// Servir el BackEnd
app.listen(PORT, () =>  {
    console.log("Servidor corriendo correctamente en http://localhost:" + PORT);
});