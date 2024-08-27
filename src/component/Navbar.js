import React, { useState, startTransition } from "react";
import { useTranslation } from "react-i18next";
import logo from "../logo.png";

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
    <nav className="flex items-center ml-28 gap-20 p-5 md:p-6 lg:p-8 ">
      <div className="flex items-center">
        <img
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
          src={logo}
          alt="Company Logo"
        />
      </div>
      <div className="flex-grow mt-16 flex text-lg items-center gap-10 md:gap-8 lg:gap-10">
        <span className="hover:underline rounded-xl cursor-pointer text-blue-600 p-2">
          {t("Home")}
        </span>
        <span className="hover:underline rounded-xl cursor-pointer text-blue-600 p-2">
          {t("Blogs")}
        </span>
        <span className="hover:underline rounded-xl cursor-pointer text-blue-600 p-2">
          {t("Contact")}
        </span>
        <div>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="p-2 border rounded-lg shadow-lg bg-white focus:outline-none"
          >
            {languages.map(({ code, name }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
