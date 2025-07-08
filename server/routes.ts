import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendEmail } from "./service/emailService";
import { mcpClient } from "./mcp-client";
import { generatePremiumHairFollicle } from "./ai-image-generator";
import { generateAvatarSet } from "./avatar-generator";
import { medicalImageGenerator, MedicalImageRequest } from "./medical-image-generator";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location?: string;
  message?: string;
  treatments?: string[];
  consent: boolean;
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const formData: ContactFormData = req.body;

      // Basic validation
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone
      ) {
        return res.status(400).json({
          message:
            "Missing required fields. Please complete all required fields and try again.",
        });
      }

      // Email validation using a simple regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return res.status(400).json({
          message:
            "Invalid email address. Please provide a valid email and try again.",
        });
      }

      // Construct the email details
      console.log("THIS IS FROM DATA", formData);
      const subject = `New contact form submission from ${formData.firstName} ${formData.lastName}`;
      const text = `You have received a new contact form submission:\n\n
                    Name: ${formData.firstName} ${formData.lastName}\n
                    Email: ${formData.email}\n
                    Phone: ${formData.phone}\n
                    Location: ${formData.location || "N/A"}\n
                    Treatments: ${formData.treatments}\n
                    Consent: ${formData.consent ? "Yes" : "No"}`;
      const html = `<div>
                      <p>You have received a new contact form submission:</p>
      <div> Name: ${formData.firstName} ${formData.lastName} </div>
                    <div> Email: ${formData.email} </div>
                    <div> Phone: ${formData.phone}</div>
                    <div> Location: ${formData.location || "N/A"} </div>
                    <div> Treatments: ${formData.treatments} </div>
         <div> Con: ${formData.consent ? "Yes" : "No"} </div>
                     </div>`;
      // Send email using SendGrid
      await sendEmail(
        process.env.CONTACT_EMAIL || "angel@smoothmd.com",
        subject,
        text,
        html,
      );

      // Return success response
      return res.status(200).json({
        message: "Thank you for your submission! We'll contact you shortly.",
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  });

  // MCP endpoint for sending HTML to Figma
  app.post("/api/send-to-figma", async (req, res) => {
    try {
      const { html, selector, name, description } = req.body;

      if (!html) {
        return res.status(400).json({
          message: "HTML content is required"
        });
      }

      // Connect to MCP server if not already connected
      const connected = await mcpClient.connect();
      if (!connected) {
        return res.status(500).json({
          message: "Failed to connect to html.to.design service"
        });
      }

      // Send HTML to Figma
      const result = await mcpClient.sendHtmlToFigma(html, {
        selector,
        name,
        description
      });

      return res.status(200).json({
        message: "Successfully sent to Figma",
        result
      });

    } catch (error) {
      console.error("Error sending to Figma:", error);
      return res.status(500).json({
        message: "Failed to send to Figma. Please try again later."
      });
    }
  });

  // AI Image Generation endpoint
  app.post("/api/generate-hair-follicle", async (req, res) => {
    try {
      const result = await generatePremiumHairFollicle();
      res.json(result);
    } catch (error) {
      console.error("Error generating hair follicle image:", error);
      res.status(500).json({ error: "Failed to generate image" });
    }
  });

  // Avatar Generation endpoint
  app.post("/api/generate-avatars", async (req, res) => {
    try {
      const avatars = await generateAvatarSet();
      res.json(avatars);
    } catch (error) {
      console.error("Error generating avatars:", error);
      res.status(500).json({ error: "Failed to generate avatars" });
    }
  });

  // Initialize MCP connection on server start
  mcpClient.connect().catch(console.error);

  const httpServer = createServer(app);

    // MCP endpoint for importing URLs to Figma
  app.post("/api/import-url-to-figma", async (req, res) => {
    try {
      const { url, selector, name, description } = req.body;

      if (!url) {
        return res.status(400).json({
          message: "URL is required"
        });
      }

      // Connect to MCP server if not already connected
      const connected = await mcpClient.connect();
      if (!connected) {
        return res.status(500).json({
          message: "Failed to connect to html.to.design service"
        });
      }

      // Import URL to Figma
      const result = await mcpClient.importUrlToFigma(url, {
        selector,
        name,
        description
      });

      return res.status(200).json({
        message: "Successfully imported URL to Figma",
        result
      });

    } catch (error) {
      console.error("Error importing URL to Figma:", error);
      return res.status(500).json({
        message: "Failed to import URL to Figma. Please try again later."
      });
    }
  });

  // MCP endpoint for importing raw HTML to Figma
  app.post("/api/import-html-to-figma", async (req, res) => {
    try {
      const { html, name, description } = req.body;

      if (!html) {
        return res.status(400).json({
          message: "HTML content is required"
        });
      }

      // Connect to MCP server if not already connected
      const connected = await mcpClient.connect();
      if (!connected) {
        return res.status(500).json({
          message: "Failed to connect to html.to.design service"
        });
      }

      // Import HTML to Figma using import-html tool
      const result = await mcpClient.importHtmlToFigma(html, {
        name,
        description
      });

      return res.status(200).json({
        message: "Successfully imported HTML to Figma",
        result
      });

    } catch (error) {
      console.error("Error importing HTML to Figma:", error);
      return res.status(500).json({
        message: "Failed to import HTML to Figma. Please try again later."
      });
    }
  });

  // Medical image generation endpoints
  app.post("/api/generate-medical-images", async (req, res) => {
    try {
      const request: MedicalImageRequest = req.body;
      
      // Validate required fields
      if (!request.deviceType || !request.style) {
        return res.status(400).json({
          message: "Device type and style are required"
        });
      }

      const images = await medicalImageGenerator.generateMedicalImages(request);
      
      return res.status(200).json({
        message: "Medical images generated successfully",
        images
      });

    } catch (error) {
      console.error("Error generating medical images:", error);
      return res.status(500).json({
        message: "Failed to generate medical images. Please try again later."
      });
    }
  });

  app.post("/api/generate-hair-restoration-set", async (req, res) => {
    try {
      const imageSet = await medicalImageGenerator.generateHairRestorationSet();
      
      return res.status(200).json({
        message: "Hair restoration image set generated successfully",
        images: imageSet
      });

    } catch (error) {
      console.error("Error generating hair restoration image set:", error);
      return res.status(500).json({
        message: "Failed to generate hair restoration image set. Please try again later."
      });
    }
  });

  return httpServer;
}