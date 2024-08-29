import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./GoogleTranslate.css";

const GoogleTranslate = () => {
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      const existingScript = document.getElementById("google-translate-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        // Clean up script on component unmount
        return () => {
          document.body.removeChild(script);
        };
      }
    };

    // Define the global callback function
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    // <div className="relative inline-block text-sm flex items-center justify-center">
    <div className="relative">
      <Helmet>
        <script type="text/javascript">
          {`
            function googleTranslateElementInit() {
              if (window.google && window.google.translate && document.getElementById('google_translate_element')) {
                new window.google.translate.TranslateElement(
                  { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
                  'google_translate_element'
                );
              }
            }
          `}
        </script>
      </Helmet>
      <div
        id="google_translate_element"
        // className="relative flex flex-col items-center justify-center cursor-pointer"
        className="relative cursor-pointer"
      >
        {/* The dropdown will be automatically inserted here by Google Translate */}
      </div>
    </div>
  );
};

export default GoogleTranslate;
