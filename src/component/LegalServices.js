import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFileAlt,
  FaPencilAlt,
  FaCode,
  FaUsers,
  FaEnvelope,
  FaGavel,
  FaStop,
  FaCalculator,
  FaRobot,
  FaSyncAlt,
  FaBriefcase,
  FaAmbulance,
  FaHandshake,
  FaShieldAlt,
  FaKey,
  FaUserCircle,
  FaSearch,
  FaSearchPlus,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// Import the JSON data
import data from "./legalServices.json";

// Map of icon names to their respective components
const iconMap = {
  FaFileAlt: FaFileAlt,
  FaPencilAlt: FaPencilAlt,
  FaCode: FaCode,
  FaUsers: FaUsers,
  FaEnvelope: FaEnvelope,
  FaGavel: FaGavel,
  FaStop: FaStop,
  FaCalculator: FaCalculator,
  FaRobot: FaRobot,
  FaSyncAlt: FaSyncAlt,
  FaBriefcase: FaBriefcase,
  FaAmbulance: FaAmbulance,
  FaHandshake: FaHandshake,
  FaShieldAlt: FaShieldAlt,
  FaKey: FaKey,
  FaUserCircle: FaUserCircle,
  FaSearch: FaSearch,
  FaSearchPlus: FaSearchPlus,
  IoMdClose: IoMdClose, // Default icon if no match is found
};

// Function to get the icon component based on the icon name
const getIconComponent = (iconName) => {
  const IconComponent = iconMap[iconName];
  return IconComponent || IoMdClose; // Default to IoMdClose if not found
};

const LegalServices = () => {
  const { t } = useTranslation();

  // Convert the imported data to an array of services
  const services = Object.keys(data);

  return (
    <>
      <div className="flex flex-col items-center mt-32 gap-6">
        <div className="flex text-blue-700 text-center gap-3 text-lg items-center border-2 border-slate-300 w-fit p-2 pr-4 pl-4 rounded-3xl">
          <FaUserCircle />
          <span>{t("Use Cases")}</span>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-5xl font-medium">{t("Want more use cases?")}</h1>
          <br />
          <p className="text-lg w-[600px] text-center text-teal-600">
            {t(
              "See how we expand our capabilities to meet all your scenarios."
            )}
          </p>
        </div>
      </div>

      <div className="pr-10 pl-10">
        <h1 className="text-xl font-bold mb-10 text-center">
          {t("Legal Services")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const iconName = data[service].icon;
            const IconComponent = getIconComponent(iconName); // Get the icon component
            return (
              <div
                key={index}
                className="bg-teal-50 p-5 rounded-lg shadow-md flex flex-col text-center items-center w-[300px]"
              >
                <IconComponent className="text-2xl" />
                <br />
                <div>
                  <h2 className="text-lg font-semibold mb-2">{t(service)}</h2>
                  <p>{t(data[service].description)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LegalServices;
