import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json"; // Import the single JSON file

// Flatten translations object
const resources = Object.keys(translations).reduce((acc, lng) => {
  acc[lng] = { translation: translations[lng] };
  return acc;
}, {});

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
