import heroImage from "@/assets/hero-controller.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import mouseImage from "@/assets/product-mouse.jpg";
import headsetImage from "@/assets/product-headset.jpg";

// Replace these values with the client's real business details before publishing.
// The logo and images are independent files and can be replaced without editing page layout.
export const site = {
  name: "المتجر الذكي",
  logo: "/logo.svg",
  phone: "PLACEHOLDER_PHONE",
  whatsapp: "PLACEHOLDER_WHATSAPP",
  facebook: "PLACEHOLDER_FACEBOOK",
  address: "PLACEHOLDER_ADDRESS",
  mapUrl: "PLACEHOLDER_MAP_URL",
  heroImage,
  products: [
    { image: keyboardImage, title: "لوحات مفاتيح" },
    { image: mouseImage, title: "فأرات الكمبيوتر" },
    { image: headsetImage, title: "سماعات الألعاب" },
  ],
};

export const contactLinks = {
  whatsapp: `https://wa.me/${site.whatsapp}`,
  phone: `tel:${site.phone}`,
  facebook: `https://www.facebook.com/${site.facebook}`,
  map: site.mapUrl === "PLACEHOLDER_MAP_URL"
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`
    : site.mapUrl,
};