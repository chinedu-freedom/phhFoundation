"use server";

import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/zohoMailer";

export async function subscribeNewsletterAction(prevState, formData) {
  const email = formData.get("email")?.toString().trim().toLowerCase();

  if (!email) {
    return { error: "Email address is required." };
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    // Check if user is already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      if (existing.active) {
        return { success: true, message: "You are already subscribed!" };
      }
      
      // Reactivate subscription if previously unsubscribed
      await prisma.newsletterSubscriber.update({
        where: { email },
        data: { active: true },
      });
    } else {
      // Create new subscriber
      await prisma.newsletterSubscriber.create({
        data: { email, active: true },
      });
    }

    // Send thank you / welcome email
    const welcomeHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f1f1f1; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <span style="font-size: 24px; font-weight: bold; color: #0d9488;">HH Foundation</span>
        </div>
        <h2 style="color: #1f2937; margin-bottom: 12px;">Thank you for subscribing!</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
          You have successfully subscribed to the Hephzibah Humanitarian Foundation newsletter list.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
          We will keep you informed about our upcoming medical outreaches, educational scholarship distributions, active campaigns, and community workshops.
        </p>
        <div style="background-color: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px; padding: 16px; margin: 24px 0; text-align: center;">
          <p style="margin: 0; font-size: 14px; color: #0f766e; font-weight: bold;">
            Thank you for being part of the change.
          </p>
        </div>
        <p style="font-size: 16px; line-height: 1.6; color: #4b5563; margin-top: 24px;">
          Warmest regards,<br />
          <strong>The HH Foundation Team</strong>
        </p>
      </div>
    `;

    // Try to send the email, but don't fail the registration if Zoho fails (e.g. env not fully set up locally)
    try {
      await sendEmail({
        to: email,
        subject: "Welcome to the HH Foundation Newsletter!",
        html: welcomeHtml,
      });
    } catch (emailError) {
      console.error("Welcome email sending failed:", emailError);
    }

    // Write audit log
    await prisma.auditLog.create({
      data: {
        action: "NEWSLETTER_SUBSCRIBE",
        details: `Email ${email} subscribed to the newsletter list.`,
        userEmail: email,
      },
    });

    return { success: true, message: "Thank you for subscribing to our newsletter!" };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return { error: "Failed to subscribe. Please try again later." };
  }
}
