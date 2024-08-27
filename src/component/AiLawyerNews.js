import React, { useEffect, useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";

const AiLawyerNews = () => {
  const [news, setNews] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY; // Access the API key

  useEffect(() => {
    // Debugging API Key value

    const fetchNews = async () => {
      try {
        if (!API_KEY) {
          throw new Error("API key is missing");
        }
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=India+AND+(property+OR+murder+OR+trafficking+OR+kidnapping+OR+robbery+OR+"court+cases"+OR+decisions)&apiKey=${API_KEY}&language=en&sortBy=publishedAt`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch news: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.slice(0, 15)); // Load 15 filtered news items
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [API_KEY]);

  return (
    <div className="flex flex-col items-center mt-32 gap-6">
      <div className="flex text-blue-700 text-center gap-3 text-lg items-center border-2 border-slate-300 w-fit p-2 pr-4 pl-4 rounded-3xl">
        <IoNewspaperOutline />
        <span>News</span>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-5xl font-medium">What our users think</h1>
        <br />
        <p className="text-lg w-[600px] text-center text-teal-600">
          Find out how our platform has changed the legal services experience
          for diverse users.
        </p>
      </div>

      {/* News Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Indian Commercial News & Court Cases
        </h2>

        {/* Infinite Scroll Animation */}
        <div className="flex justify-between gap-6 overflow-hidden">
          {[...Array(3)].map((_, colIndex) => (
            <div key={colIndex} className="w-full sm:w-1/3">
              <div className="news-column h-[400px] overflow-hidden relative">
                <div className="news-items animate-scroll">
                  {news.map((article, index) => (
                    <div
                      key={`${colIndex}-${index}`}
                      className="p-4 mb-6 border border-gray-200 rounded-lg shadow-md bg-white flex-shrink-0"
                    >
                      <img
                        src={
                          article.urlToImage ||
                          "https://via.placeholder.com/150"
                        }
                        alt={article.title}
                        className="h-24 w-full object-cover rounded-md mb-2"
                      />
                      <h3 className="text-sm font-semibold mb-1">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-700 mb-2">
                        {article.description?.substring(0, 50)}...
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-xs"
                      >
                        Read more
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional styles */}
      <style jsx>{`
        .news-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Infinite scroll animation */
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite; /* Slower scrolling for smoother animation */
        }

        .news-column {
          position: relative;
        }

        .news-column:hover .animate-scroll {
          animation-play-state: paused; /* Pause animation on hover */
        }
      `}</style>
    </div>
  );
};

export default AiLawyerNews;
