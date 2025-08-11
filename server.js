import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "Menunavega")));

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});


// Servir archivos estáticos (HTML, CSS, JS del cliente)
app.use(express.static(path.join(__dirname, "public")));

// Ruta para recibir pedidos
app.post("/enviar-pedido", async (req, res) => {
  const { nombre, email, pedido } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirmación de pedido",
      text: `Hola ${nombre}, hemos recibido tu pedido:\n\n${pedido.join(", ")}\n\n¡Gracias por tu compra!`
    });

    res.json({ ok: true, mensaje: "Pedido enviado con éxito." });
  } catch (error) {
    console.error(error);
    res.json({ ok: false, mensaje: "Error al enviar el pedido." });
  }
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));



