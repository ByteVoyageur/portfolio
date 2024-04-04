// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // only allow POST requests
  if (req.method === 'POST') {
    // destructure the body of the request
    const { name, email, company, message } = req.body

    // create a transporter
    let transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // create the email options
    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO_ADDRESS,
      subject: `Message from ${name}`,
      text: `Company: ${company}\nEmail: ${email}\nMessage: ${message}`,
    }

    // try to send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error)
        return res
          .status(500)
          .json({ message: 'Internal Server Error', error: error.message })
      }
      return res.status(200).json({ message: 'Email sent successfully' })
    })
  } else {
    // if the request method is not POST
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
