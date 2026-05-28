// src/app/api/consultation/route.ts

import nodemailer from "nodemailer";

export async function POST(req: Request) {

  try {

    // Get request body
    const body = await req.json();

    const {
      name,
      email,
      mobile,
      company,
      message,
    } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

    // =========================
    // EMAIL TO ADMIN
    // =========================

    await transporter.sendMail({

      from: `"Creative Catalyst" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Consultation Request from ${name}`,

      html: `
      
      <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:12px;
        overflow:hidden;
        font-family:Arial,sans-serif;
      ">

        <div style="
          background:#111827;
          padding:24px;
          text-align:center;
        ">

          <h1 style="
            color:#ffffff;
            margin:0;
            font-size:28px;
          ">
            Creative Catalyst
          </h1>

          <p style="
            color:#d1d5db;
            margin-top:8px;
            font-size:14px;
          ">
            New Consultation Request
          </p>

        </div>

        <div style="padding:30px;">

          <table style="
            width:100%;
            border-collapse:collapse;
          ">

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
                width:140px;
              ">
                Name
              </td>

              <td style="padding:12px 0;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
              ">
                Email
              </td>

              <td style="padding:12px 0;">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
              ">
                Mobile
              </td>

              <td style="padding:12px 0;">
                ${mobile || "Not Provided"}
              </td>
            </tr>

            <tr>
              <td style="
                padding:12px 0;
                font-weight:bold;
              ">
                Company
              </td>

              <td style="padding:12px 0;">
                ${company || "Not Provided"}
              </td>
            </tr>

          </table>

          <div style="margin-top:30px;">

            <h3 style="
              margin-bottom:10px;
              color:#111827;
            ">
              Message
            </h3>

            <div style="
              background:#f3f4f6;
              padding:20px;
              border-radius:10px;
              color:#374151;
              line-height:1.7;
            ">
              ${message}
            </div>

          </div>

        </div>

        <div style="
          background:#f9fafb;
          padding:20px;
          text-align:center;
          font-size:13px;
          color:#6b7280;
        ">
          © 2026 Creative Catalyst
        </div>

      </div>

      `,
    });

    // =========================
    // THANK YOU EMAIL TO CUSTOMER
    // =========================

    await transporter.sendMail({

      from: `"Creative Catalyst" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "Thank You for Contacting Creative Catalyst",

      html: `
      
      <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:12px;
        overflow:hidden;
        font-family:Arial,sans-serif;
      ">

        <div style="
          background:#111827;
          padding:30px;
          text-align:center;
        ">

          <h1 style="
            color:#ffffff;
            margin:0;
            font-size:30px;
          ">
            Thank You, ${name}!
          </h1>

        </div>

        <div style="padding:35px;">

          <p style="
            color:#374151;
            line-height:1.8;
            font-size:16px;
          ">
            Thank you for contacting
            <strong>Creative Catalyst</strong>.
          </p>

          <p style="
            color:#374151;
            line-height:1.8;
            font-size:16px;
          ">
            We have successfully received your consultation request.
            Our team will get back to you shortly.
          </p>

          <div style="
            background:#f3f4f6;
            padding:20px;
            border-radius:10px;
            margin-top:25px;
          ">

            <p style="margin:0;">
              <strong>Name:</strong> ${name}
            </p>

            <p style="margin-top:10px;">
              <strong>Email:</strong> ${email}
            </p>

            <p style="margin-top:10px;">
              <strong>Mobile:</strong> ${mobile || "Not Provided"}
            </p>

            <p style="margin-top:10px;">
              <strong>Company:</strong> ${company || "Not Provided"}
            </p>

          </div>

          <p style="
            margin-top:30px;
            color:#6b7280;
            line-height:1.8;
            font-size:15px;
          ">
            We appreciate your interest in Creative Catalyst.
            Looking forward to connecting with you soon.
          </p>

        </div>

        <div style="
          background:#f9fafb;
          padding:20px;
          text-align:center;
          font-size:13px;
          color:#6b7280;
        ">
          © 2026 Creative Catalyst
        </div>

      </div>

      `,
    });

    // Success response
    return Response.json(
      {
        success: true,
        message: "Emails sent successfully",
      },
      {
        status: 200,
      }
    );

  } catch (error: any) {

  
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}