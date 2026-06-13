import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Crucial: parse JSON payloads for our custom contact API
  app.use(express.json());

  // Email backend route
  app.post("/api/contact", async (req, res) => {
    try {
      const { fullName, email, phone, service, message } = req.body;

      // 1. Basic validation & sanitization
      if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
        return res.status(400).json({ success: false, error: "Please provide a valid full name (at least 2 characters)." });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== "string" || !emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: "Please provide a valid email address." });
      }

      // Format checking on phone (allow digits, space, +, -, (, ))
      const phoneClean = phone ? phone.trim() : "";
      const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      if (!phoneClean || phoneClean.length < 6 || !phoneRegex.test(phoneClean)) {
        return res.status(400).json({ success: false, error: "Please provide a valid contact telephone/WhatsApp number." });
      }

      if (!service || typeof service !== "string") {
        return res.status(400).json({ success: false, error: "Please select a growth capability or target service." });
      }

      if (!message || typeof message !== "string" || message.trim().length < 5) {
        return res.status(400).json({ success: false, error: "Please write a brief inquiry message (at least 5 characters)." });
      }

      // 2. Format a professional email markup
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              color: #1e293b;
              background-color: #f8fafc;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            }
            .header {
              background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
              color: #ffffff;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 800;
              letter-spacing: -0.025em;
            }
            .header p {
              margin: 5px 0 0 0;
              font-size: 14px;
              opacity: 0.9;
            }
            .content {
              padding: 30px;
            }
            .field-box {
              margin-bottom: 20px;
              border-bottom: 1px solid #f1f5f9;
              padding-bottom: 15px;
            }
            .field-label {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #64748b;
              font-weight: 700;
              margin-bottom: 4px;
            }
            .field-value {
              font-size: 14px;
              font-weight: 600;
              color: #0f172a;
            }
            .message-body {
              background-color: #f1f5f9;
              padding: 15px;
              border-radius: 8px;
              font-size: 14px;
              line-height: 1.6;
              color: #334155;
              white-space: pre-wrap;
              border-left: 4px solid #7c3aed;
              margin-top: 5px;
            }
            .footer {
              background-color: #f8fafc;
              padding: 20px;
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              border-top: 1px solid #f1f5f9;
            }
            .button {
              display: inline-block;
              background-color: #7c3aed;
              color: #ffffff;
              padding: 10px 20px;
              border-radius: 6px;
              text-decoration: none;
              font-weight: 600;
              font-size: 12px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Campaign Inquiry</h1>
              <p>Generated directly from your premium portfolio website</p>
            </div>
            <div class="content">
              <div class="field-box">
                <div class="field-label">Sender's Full Name</div>
                <div class="field-value">${fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
              <div class="field-box">
                <div class="field-label">Email Address</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field-box">
                <div class="field-label">Phone & WhatsApp Number</div>
                <div class="field-value">${phoneClean.replace(/</g, "&lt;")}</div>
              </div>
              <div class="field-box">
                <div class="field-label">Strategic Target Service</div>
                <div class="field-value" style="color: #7c3aed;">${service.replace(/</g, "&lt;")}</div>
              </div>
              <div>
                <div class="field-label" style="margin-bottom: 8px;">Inquiry Roadmap Details</div>
                <div class="message-body">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
              <div style="text-align: center; margin-top: 25px;">
                <a href="mailto:${email}" class="button">Reply directly to Partner</a>
              </div>
            </div>
            <div class="footer">
              This message was encrypted and dispatched via Nodemailer in your Cloud Run container.<br>
              © ${new Date().getFullYear()} Rubab Growth Partner • Direct Lead Ingestion.
            </div>
          </div>
        </body>
        </html>
      `;

      // 3. Nodemailer Transport logic
      const host = process.env.SMTP_HOST || "";
      const port = parseInt(process.env.SMTP_PORT || "587");
      const user = process.env.SMTP_USER || "";
      const pass = process.env.SMTP_PASS || "";

      let transport;
      let isSandbox = false;
      let previewUrl = "";

      if (host && user && pass) {
        // Use user's real target SMTP configuration
        transport = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: {
            user,
            pass,
          },
          tls: {
            rejectUnauthorized: false
          }
        });
      } else {
        // Safe and reliable fallback: Ethereal developer SMTP server
        isSandbox = true;
        console.warn("Nodemailer SMTP environment constants empty. Initiating development/Ethereal sandbox connection...");
        const testAccount = await nodemailer.createTestAccount();
        transport = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
      }

      // Mail options
      const mailOptions = {
        from: `"Rubab Portfolio" <${user || "sandbox@ethereal.email"}>`,
        to: "arubab887@gmail.com",
        replyTo: email,
        subject: `💼 Strategy Inquiry: ${fullName} - [${service}]`,
        text: `New Lead Proposal:\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`,
        html: htmlContent,
      };

      const info = await transport.sendMail(mailOptions);
      console.log(`Email completed shipping. MessageId: ${info.messageId}`);

      if (isSandbox) {
        previewUrl = nodemailer.getTestMessageUrl(info) || "";
        console.log(`[SANDBOX TEST LINK] Ethereal preview is available at: ${previewUrl}`);
      }

      // Return a professional success response
      return res.status(200).json({
        success: true,
        message: "Your inquiry details have been saved, validated, and directly submitted to Rubab successfully!",
        sandbox: isSandbox,
        previewUrl: previewUrl || undefined
      });

    } catch (err) {
      console.error("Backend error triggering Nodemailer logic:", err);
      return res.status(500).json({
        success: false,
        error: "Internal server encountered an error while attempting to process the mail delivery client.",
        details: err?.message || ""
      });
    }
  });

  // Serve static assets OR route the original Vite dev server middleware logic
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running beautifully on http://0.0.0.0:${PORT}`);
  });
}

startServer();
