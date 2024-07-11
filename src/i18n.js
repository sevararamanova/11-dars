import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "portfolio": "Portfolio",
        "blog": "Blog",
        "cv": "CV",
        "store": "Store",
        "freelance": "Freelance",
        "about": "About Me",
        "contact": "Contact",
        "language": "Language"
      }
    },
    uz: {
      translation: {
        "portfolio": "Portfel",
        "blog": "Blog",
        "cv": "CV",
        "store": "Do'kon",
        "freelance": "Frilanser",
        "about": "Men haqimda",
        "contact": "Bog'lanish",
        "language": "Til"
      }
    },
    ru: {
      translation: {
        "portfolio": "Портфолио",
        "blog": "Блог",
        "cv": "Резюме",
        "store": "Магазин",
        "freelance": "Фриланс",
        "about": "Обо мне",
        "contact": "Контакт",
        "language": "Язык"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
