const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/enviar-pedido", async (req, res) => {
  const { nombre, email, detalle } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tu_correo@gmail.com",      // Tu correo
        pass: "tu_contraseña_de_aplicacion", // Contraseña de aplicación de Gmail
      },
    });

    let mailOptions = {
      from: '"Restaurante" <tu_correo@gmail.com>',
      to: email, // El correo del cliente
      subject: "Confirmación de tu pedido",
      html: `
        <h3>Hola ${nombre}, gracias por tu pedido</h3>
        <p><strong>Detalles de tu pedido:</strong></p>
        <p>${detalle}</p>
        <p>Nos pondremos en contacto contigo pronto.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.send("<h3>Pedido enviado correctamente. Revisa tu correo 📧</h3>");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.send("<h3>Hubo un error al enviar tu pedido.</h3>");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});