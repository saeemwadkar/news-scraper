import { useState, useEffect } from "react";
import axios from "axios";
import { Globe, RefreshCcw } from "lucide-react"; 

export default function Headlines() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/scrape");
      setHeadlines(res.data.headlines);
    } catch (err) {
      console.error("Error fetching headlines:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Globe className="w-7 h-7 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">Latest Headlines</h2>
        </div>

        {/*Refresh Button */}
        <button
          onClick={fetchData}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          <RefreshCcw className="w-5 h-5" />
          Refresh
        </button>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {headlines.map((h, idx) => (
            <a
              key={idx}
              href={h.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {h.title}
              </h3>
              <p className="text-sm text-blue-600 font-medium flex items-center gap-1">
                Read More →
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
