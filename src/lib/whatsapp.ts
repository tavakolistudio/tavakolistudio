const WA_NUMBER = "905016967777";

export function buildWhatsAppLink(params: {
  name: string;
  projectType: string;
  location: string;
  date: string;
  style: string;
  budgetRange: string;
}): string {
  const { name, projectType, location, date, style, budgetRange } = params;

  const message = [
    `Hello, I'd like to book a session with Tavakoli Studio.`,
    ``,
    `Name: ${name}`,
    `Project: ${projectType}`,
    `Location: ${location}`,
    `Date: ${date}`,
    `Style: ${style}`,
    `Budget Range: ${budgetRange}`,
    ``,
    `Looking forward to hearing from you!`,
  ].join("\n");

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildSimpleWhatsAppLink(message?: string): string {
  const text = message ?? "Hello, I'd like to learn more about Tavakoli Studio.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_HREF = `https://wa.me/${WA_NUMBER}`;
