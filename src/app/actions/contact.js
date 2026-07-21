"use server";

import { prisma } from "@/lib/db";

export async function submitContactForm(prevState, formData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const organisation = formData.get("organisation")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim() || "No Subject";
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !phone || !message) {
    return { error: "Name, email, phone, and message are required." };
  }

  try {
    // Log the contact form submission to the AuditLog database table
    await prisma.auditLog.create({
      data: {
        action: "CONTACT_FORM_SUBMIT",
        userEmail: email,
        details: `Name: ${name} | Phone: ${phone} | Org: ${organisation || "N/A"} | Subject: ${subject} | Message: ${message.slice(0, 150)}...`,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Contact Form error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
