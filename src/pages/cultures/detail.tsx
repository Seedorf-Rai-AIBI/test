import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cultureItems from '../../data/culture';

// Sample data structure with short and long descriptions

const CultureDetailPage = () => {
  const { id } = useParams();
  const [selectedCulture, setSelectedCulture] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    const cultureId = parseInt(id, 10);
    const found = cultureItems.find(item => item.id === cultureId);
    setSelectedCulture(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!selectedCulture) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-500">
        Loading culture details...
      </div>
    );
  }

  // Get other culture items (excluding the selected one)
  const otherCultures = cultureItems.filter(item => item.id !== selectedCulture.id
    && item.category === selectedCulture.category
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section with Selected Culture */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => window.history.back()}
        >
          ← Back to Culture
        </button>

        {/* Main Content: Image + Short Description */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <img 
              src={selectedCulture.image} 
              alt={selectedCulture.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 text-7xl" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>
              {selectedCulture.icon}
            </div>
          </div>

          {/* Right: Short Description */}
          <div className="flex flex-col justify-center">
            <span className="inline-block w-fit px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Cultural Heritage
            </span>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {selectedCulture.title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {selectedCulture.shortDescription}
            </p>
          </div>
        </div>

        {/* Long Description Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Discover the Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedCulture.description}
            </p>
          </div>
        </div>

        {/* Other Culture Cards */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore More {selectedCulture.category} 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCultures.map((item) => (
              <div 
                key={item.id}
                onClick={() => {
                  setSelectedCulture(item);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 border border-gray-200 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
                    <span className="text-4xl" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}>
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>
                  <button className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureDetailPage;