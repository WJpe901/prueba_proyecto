import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./src/routes/index.js"; // La ruta hacia los archivos de rutas no cambia

const app = express();
const PORT = process.env.PORT || 3000;

// Obtener el directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configurar el motor de plantillas (views) y el directorio de vistas
app.set('views', join(__dirname, 'src', 'views'));  // Cambia la ruta a 'src/views'
app.set("view engine", "ejs");

// Usar las rutas
app.use(indexRoutes);

// Servir archivos estáticos
app.use(express.static(join(__dirname, "src", "public")));  // Cambia la ruta a 'src/public'

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
