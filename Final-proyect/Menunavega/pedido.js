//Confirmacion de pedido y envio al correo.
// pedido.js
// pedido.js
require("dotenv").config( { path: "../../.env" } );
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware para leer datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir el archivo HTML directamente
app.use(express.static(path.join(__dirname, "pedido.css")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "reservas.html"));
});

app.get("/ordenar", (req, res) => {
  res.sendFile(path.join(__dirname, "Ordene.html"));
});



// Ruta para recibir el formulario y enviar el correo
app.post("/enviar-pedido", async (req, res) => {
  const { nombre, email, pedido } = req.body;

  if (!nombre || !email || !pedido) {
    return res.status(400).json({ ok: false, mensaje: "Faltan datos en el formulario" });
  }

  try {
    // Configurar transporte de correo
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // tu correo
        pass: process.env.EMAIL_PASS  // tu contraseña de aplicación
      }
    });

    // Contenido del correo
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirmación de tu pedido",
      text: `Hola ${nombre}, hemos recibido tu pedido:\n\n${pedido.join(", ")}\n\n¡Gracias por tu compra!`
    };

    await transporter.sendMail(mailOptions);
    res.json({ ok: true, mensaje: "Pedido Creado y enviado a tu correo" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, mensaje: "Error enviando el correo" });
  }
});

//Modal formulario encima


app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
