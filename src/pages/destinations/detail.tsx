import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import packages from '../../data/package';

type Tour = any;

const TourDetailPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const tourId = params.id ? Number(params.id) : null;

  const [tour, setTour] = useState<Tour | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  useEffect(() => {
    if (!tourId) return;
    const found = (packages as any[]).find((t) => Number(t.id) === Number(tourId));
    setTour(found ?? null);
  }, [tourId]);

  const handleBooking = () => {
    alert('Booking functionality to be implemented');
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '1234567890';
    const message = encodeURIComponent(`Hi, I'm interested in the ${tour?.title ?? tour?.name ?? ''}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };

  if (!tour) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-xl text-slate-500">
        <p>Tour not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Go back
        </button>
      </div>
    );
  }

  const title = tour.title ?? tour.name ?? 'Untitled Tour';
  const heroImage = tour.heroImage ?? tour.image ?? '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden opacity-[0.95]"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div 
          className="absolute inset-0 z-10"
          style={{ 
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.7) 100%)'
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)' }}
        />

        <div className="relative z-20 text-center text-white max-w-4xl px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md opacity-95">{tour.description}</p>
          <button
            onClick={handleBooking}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Tour Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tour.price > 0 && (
            <div className="bg-white rounded-xl shadow-xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-sm text-slate-500 font-medium mb-2 uppercase tracking-wide">From</div>
              <div className="text-3xl font-bold text-slate-800">₹ {tour.price}</div>
            </div>
          )}
          <div className="bg-white rounded-xl shadow-xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-sm text-slate-500 font-medium mb-2 uppercase tracking-wide">Duration</div>
            <div className="text-3xl font-bold text-slate-800">{tour.duration}</div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-sm text-slate-500 font-medium mb-2 uppercase tracking-wide">Tour Type</div>
            <div className="text-3xl font-bold text-slate-800">{tour.type}</div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="text-sm text-slate-500 font-medium mb-2 uppercase tracking-wide">Rating</div>
            <div className="text-3xl font-bold text-slate-800">{tour.rating}/5 ({tour.reviewCount})</div>
          </div>
        </div>
      </div>

      {/* Description & Panels */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">About This Tour</h2>
          <p className="text-lg leading-relaxed text-slate-600">{tour.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tour.inclusions && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-slate-200">What's Included</h3>
              <ul className="space-y-3">
                {tour.inclusions.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 font-bold mr-3 text-xl">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tour.exclusions && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-slate-200">What's Not Included</h3>
              <ul className="space-y-3">
                {tour.exclusions.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500 font-bold mr-3 text-xl">✗</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tour.requirements && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-slate-200">What to Bring</h3>
              <ul className="space-y-3">
                {tour.requirements.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3 text-xl">→</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Tour Plan</h2>
          <div className="space-y-8">
            {tour.itinerary?.map((item: any) => (
              <div key={item.day} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">Day {item.day}</div>
                  <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
                </div>
                <ul className="space-y-3 ml-20">
                  {item.activities.map((activity: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">●</span>
                      <span className="text-slate-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {tour.amenities?.filter((a: any) => a.included).length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center"><span className="text-3xl mr-2">✓</span> Included</h3>
              <ul className="space-y-4">
                {tour.amenities.filter((a: any) => a.included).map((amenity: any) => (
                  <li key={amenity.id} className="flex border-[1px] rounded-md p-2 border-gray-300 items-center">
                    <span className="text-green-500 text-2xl mr-3">✓</span>
                    <span className="text-lg text-slate-700">{amenity.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tour.amenities?.filter((a: any) => !a.included).length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center"><span className="text-3xl mr-2">✗</span> Not Included</h3>
              <ul className="space-y-4">
                {tour.amenities.filter((a: any) => !a.included).map((amenity: any) => (
                  <li key={amenity.id} className="flex items-center">
                    <span className="text-red-500 text-2xl mr-3">✗</span>
                    <span className="text-lg text-slate-700">{amenity.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {tour.faqs?.map((faq: any) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</span>
                  <span className="text-3xl text-blue-600 font-bold flex-shrink-0">{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Book Your Adventure?</h2>
          <p className="text-xl text-white/90 mb-10">Contact us today to reserve your spot on this amazing tour</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleBooking} className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300 shadow-xl">Book Now</button>
            <button onClick={handleWhatsAppContact} className="bg-green-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 shadow-xl">Contact via WhatsApp</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetailPage;