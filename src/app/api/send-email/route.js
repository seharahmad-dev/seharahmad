// File: app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the incoming request body
    const { name, email, message } = await request.json();
    
    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }
    
    // Email configuration - using EmailJS or a similar service would be better for client-side
    // This is a basic SMTP setup that works with most email providers
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Or another service like 'outlook', 'yahoo', etc.
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',  // Set this in your environment variables
        pass: process.env.EMAIL_PASSWORD || 'your-app-password',  // Set this in your environment variables
      },
    });
    
    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER || 'your-email@gmail.com'}>`,
      to: 'seharahmad.dev@gmail.com',  // Your email where you want to receive messages
      replyTo: email,  // So you can reply directly to the sender
      subject: `Portfolio Contact Form: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New message from your portfolio contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Return a success response
    return NextResponse.json({ 
      message: 'Email sent successfully' 
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return an error response
    return NextResponse.json({ 
      message: 'Failed to send email. Please try again later or contact directly via email.' 
    }, { status: 500 });
  }
}