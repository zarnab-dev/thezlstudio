import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

/**
 * Sends form data as a real email via EmailJS.
 * Falls back to a simulated delay if EmailJS env vars aren't configured yet,
 * so the UI still works out of the box during development.
 *
 * Setup (see README.md for full steps):
 * 1. Create a free account at https://www.emailjs.com
 * 2. Add an Email Service + Email Template
 * 3. Copy the three IDs into a `.env` file at the project root:
 *    VITE_EMAILJS_SERVICE_ID=xxxxxxx
 *    VITE_EMAILJS_TEMPLATE_ID=xxxxxxx
 *    VITE_EMAILJS_PUBLIC_KEY=xxxxxxx
 */
export async function sendEmail(templateParams) {
  if (!isEmailConfigured) {
    // Simulated fallback — no real email is sent until env vars are set.
    await new Promise((resolve) => setTimeout(resolve, 900))
    return { simulated: true }
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
}
