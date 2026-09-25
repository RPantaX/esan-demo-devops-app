const express = require("express");

const app = express();

// Ruta principal: lo que se ve al abrir la app
app.get("/", (req, res) => {
  res.json({
    mensaje: "¡Hola desde el Grupo 4! 🚀",
    version: process.env.APP_VERSION || "local",
  });
});

// Health check: Kubernetes y los balanceadores lo usan para saber si la app está viva
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Una función simple para tener algo de lógica que probar
function sumar(a, b) {
  return a + b;
}

module.exports = { app, sumar };
