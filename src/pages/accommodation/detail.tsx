import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import accommodations from '../../data/hotel';

const AccommodationDetailPage = () => {
  // Get accommodation ID from URL
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState<any>(null);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    if (!id) return;
    const accommodationId = parseInt(id, 10);
    const found = accommodations.find(acc => acc.id === accommodationId);
    setAccommodation(found);
    if (found && found.roomTypes) {
      setSelectedRoomType(found.roomTypes[0]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleBooking = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Booking ${accommodation?.name}\nRoom: ${selectedRoomType}\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}`);
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '1234567890';
    const message = encodeURIComponent(`Hi, I'm interested in booking ${accommodation?.name} for ${guests} guest(s)`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const calculateTotalPrice = () => {
    const nights = calculateNights();
    return nights * accommodation.pricePerNight;
  };

  if (!accommodation) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-slate-500">
        Loading accommodation details...
      </div>
    );
  }

  const getTypeColor = (type: any) => {
    const colors: Record<string, string> = {
      'Luxury Resort': 'bg-purple-500',
      'Boutique Hotel': 'bg-pink-500',
      'Heritage Property': 'bg-amber-500',
      'Heritage Hotel': 'bg-orange-500',
      'Homestay': 'bg-green-500',
      'Business Hotel': 'bg-blue-500',
      'Eco Resort': 'bg-teal-500',
      'Luxury Hotel': 'bg-indigo-500',
      'Budget Hotel': 'bg-cyan-500',
      'Wellness Resort': 'bg-emerald-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-end overflow-hidden"
        style={{ backgroundImage: `url('${accommodation.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`${getTypeColor(accommodation.type)} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
              {accommodation.type}
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-1">
              <span>⭐</span>
              <span>{accommodation.rating}</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">{accommodation.name}</h1>
          <p className="text-xl text-white/95 drop-shadow-md flex items-center gap-2 mb-4">
            <span>📍</span>
            {accommodation.location}
          </p>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-3xl">{accommodation.shortDescription}</p>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-30 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">💰</span>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Price</div>
            </div>
            <div className="text-2xl font-bold text-slate-800">₹{accommodation.pricePerNight.toLocaleString()}</div>
            <div className="text-sm text-slate-600">per night</div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🛏️</span>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Rooms</div>
            </div>
            <div className="text-2xl font-bold text-slate-800">{accommodation.rooms}</div>
            <div className="text-sm text-slate-600">available</div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🕐</span>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Check-in</div>
            </div>
            <div className="text-2xl font-bold text-slate-800">{accommodation.checkIn}</div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🕐</span>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Check-out</div>
            </div>
            <div className="text-2xl font-bold text-slate-800">{accommodation.checkOut}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">ℹ️</span>
                About This Property
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 mb-6">{accommodation.longDescription}</p>
            </div>

            {/* Amenities Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">✨</span>
                Amenities & Facilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {accommodation.amenities.map((amenity: any, idx: any) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-slate-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types Section */}
            {accommodation.roomTypes && accommodation.roomTypes.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="text-4xl">🚪</span>
                  Room Types Available
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {accommodation.roomTypes.map((room: any, idx: any) => (
                    <div key={idx} className="border-2 border-blue-100 rounded-lg p-4 hover:border-blue-500 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🏨</span>
                        <span className="text-lg font-semibold text-slate-800">{room}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Attractions */}
            {accommodation.nearbyAttractions && accommodation.nearbyAttractions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="text-4xl">📍</span>
                  Nearby Attractions
                </h2>
                <ul className="space-y-3">
                  {accommodation.nearbyAttractions.map((attraction: any, idx: any) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Policies Section */}
            {accommodation.policies && accommodation.policies.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="text-4xl">📋</span>
                  Policies
                </h2>
                <ul className="space-y-3">
                  {accommodation.policies.map((policy: any, idx: any) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-slate-700">{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-4 border-2 border-blue-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Book Your Stay</h3>
                <p className="text-slate-600">Reserve your room now</p>
              </div>

              {/* Booking Form */}
              <div className="space-y-4 mb-6">
                {/* Room Type Selection */}
                {accommodation.roomTypes && accommodation.roomTypes.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Room Type
                    </label>
                    <select
                      value={selectedRoomType}
                      onChange={(e) => setSelectedRoomType(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      {accommodation.roomTypes.map((room: any, idx: any) => (
                        <option key={idx} value={room}>{room}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Check-in Date */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Check-out Date */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    min={checkInDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    min="1"
                    max="10"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Price Summary */}
              {checkInDate && checkOutDate && calculateNights() > 0 && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">₹{accommodation.pricePerNight.toLocaleString()} x {calculateNights()} nights</span>
                    <span className="font-semibold text-slate-800">₹{(accommodation.pricePerNight * calculateNights()).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-blue-200 my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-800">Total</span>
                    <span className="font-bold text-blue-600 text-xl">₹{calculateTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              )}

              {/* Booking Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book Now
                </button>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-green-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  WhatsApp Inquiry
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">Need Assistance?</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Contact our team for help with your booking or any questions.
                </p>
                <p className="text-sm text-slate-600">
                  📞 <span className="font-semibold">+91 1234567890</span>
                </p>
                <p className="text-sm text-slate-600">
                  ✉️ <span className="font-semibold">bookings@sikkimtours.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Book your stay today and create unforgettable memories in the Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleBooking}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Reserve Your Room
            </button>
          </div>
          <a 
            href="/accommodations" 
            className="inline-flex items-center gap-2 text-white font-semibold no-underline transition-all duration-200 hover:gap-4 text-lg group"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Back to All Accommodations
          </a>
        </div>
      </section>
    </div>
  );
};

export default AccommodationDetailPage;