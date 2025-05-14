const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Verifica che la richiesta sia di tipo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    const { from, to, subject, text, token } = req.body;

    // Verifica che il token sia corretto
    if (token !== 'wdgc smro okea heia') {
      return res.status(401).json({ error: 'Token non valido' });
    }

    // Configura il trasportatore SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'reservationwebbitz@gmail.com',
        pass: 'wdgc smro okea heia' // Token app Gmail
      }
    });

    // Opzioni email
    const mailOptions = {
      from: 'Vistamare Prenotazioni <reservationwebbitz@gmail.com>',
      to,
      subject,
      text,
      replyTo: req.body.replyTo || 'reservationwebbitz@gmail.com'
    };

    // Invia l'email
    await transporter.sendMail(mailOptions);

    // Risposta di successo
    return res.status(200).json({ success: true, message: 'Email inviata con successo' });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return res.status(500).json({ error: 'Errore nell\'invio dell\'email', details: error.message });
  }
}; 