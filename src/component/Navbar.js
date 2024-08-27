import React, { useState, startTransition } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);

    startTransition(() => {
      i18n.changeLanguage(newLang);
    });
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi" },
    { code: "bn", name: "Bengali" },
    // Add more languages as needed
  ];

  return (
    <div className="flex justify-between p-5 text-lg items-center">
      <div>
        <h2>{t("logo")}</h2>
      </div>
      <div className="flex gap-5 items-center">
        <span className="hover:underline text-blue-600">{t("Home")}</span>
        <span className="hover:underline text-blue-600">{t("Blogs")}</span>
        <span className="hover:underline text-blue-600">{t("Contact")}</span>
        <div className="ml-5">
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="p-2 border rounded-lg shadow-lg"
          >
            {languages.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
