"use server";

import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/zohoMailer";

export async function submitPartnerForm(prevState, formData) {
  const orgName = formData.get("orgName")?.toString().trim();
  const contactName = formData.get("contactName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const partnerType = formData.get("partnerType")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!orgName || !contactName || !email || !phone || !partnerType || !message) {
    return { error: "All fields are required." };
  }

  try {
    // Log the partnership inquiry to the AuditLog database table
    await prisma.auditLog.create({
      data: {
        action: "PARTNER_FORM_SUBMIT",
        userEmail: email,
        details: `Org: ${orgName} | Contact: ${contactName} | Phone: ${phone} | Type: ${partnerType} | Message: ${message.slice(0, 300)}`,
      },
    });

    // Send notification email to Admin (ZOHO_FROM_EMAIL)
    const adminEmail = process.env.ZOHO_FROM_EMAIL || "info@hephzibahhumanitarianf.org";
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #1d4ed8; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0;">New Partnership Inquiry</h2>
        <p style="font-size: 15px; color: #374151;">A new corporate/institutional partnership inquiry has been received:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px; color: #4b5563;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 150px;">Organization:</td>
            <td style="padding: 8px 0; color: #111827;">${orgName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Contact Person:</td>
            <td style="padding: 8px 0; color: #111827;">${contactName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px 0; color: #111827;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Partnership Type:</td>
            <td style="padding: 8px 0; color: #1d4ed8; font-weight: bold;">${partnerType}</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px; padding: 16px; background-color: #f3f4f6; border-radius: 8px;">
          <h4 style="margin: 0 0 8px 0; color: #1f2937;">Message / Partnership Details:</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #4b5563; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: adminEmail,
      subject: `New Partnership Inquiry: ${orgName} (${partnerType})`,
      html: adminHtml,
    });

    // Send thank you/confirmation email to the applicant
    const thankYouHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <span style="font-size: 24px; font-weight: bold; color: #2563eb;">HH Foundation</span>
        </div>
        <h2 style="color: #1f2937; margin-bottom: 12px; margin-top: 0;">Dear ${contactName},</h2>
        <p style="font-size: 15px; line-height: 1.6; color: #4b5563;">
          Thank you for reaching out to partner with the **HH Foundation** on behalf of **${orgName}**. 
        </p>
        <p style="font-size: 15px; line-height: 1.6; color: #4b5563;">
          We have received your request for **${partnerType}** collaboration. Our partnerships coordinator is reviewing your details and will reach out to you within the next 2-3 business days to discuss how we can work together to scale educational and healthcare access in Enugu State.
        </p>
        <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <h4 style="margin: 0 0 6px 0; color: #1e3a8a; font-size: 14px;">Next Steps:</h4>
          <p style="margin: 0; font-size: 13px; color: #1e40af;">
            No further action is required from your end. We will review your profile and reach out directly using the email or phone number you provided.
          </p>
        </div>
        <p style="font-size: 15px; line-height: 1.6; color: #4b5563; margin-top: 24px;">
          Warmest regards,<br />
          <strong>The Partnerships Team</strong><br />
          HH Foundation
        </p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: `Thank you for contacting HH Foundation - Partnership Inquiry`,
      html: thankYouHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Partner Form submission error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
