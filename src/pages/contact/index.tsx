import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setFormStatus('success');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setFormStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210"
    },
    {
      icon: "✉️",
      title: "Email",
      value: "info@sikkimtourism.com",
      link: "mailto:info@sikkimtourism.com"
    },
    {
      icon: "📍",
      title: "Address",
      value: "Tourism Office, Gangtok, Sikkim 737101",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Plan Your Sikkim Adventure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your trip? We're here to help you create unforgettable memories
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Travel Image & Contact Info */}
          <div className="space-y-8">
            {/* Travel Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] group">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Sikkim Mountain Landscape"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">
                    Your Journey Begins Here
                  </h3>
                  <p className="text-white/90 text-lg">
                    Let us guide you through the Himalayas
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">
                    {info.title}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-900 font-semibold hover:text-purple-600 transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold">
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Connect Buttons */}
            <div className="rounded-2xl p-8 text-white shadow-xl"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}>
              <h3 className="text-2xl font-bold mb-4">Quick Connect</h3>
              <p className="mb-6 text-white/90">
                Reach out instantly through your preferred channel
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl">💬</span>
                  WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xl">📞</span>
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Message sent successfully! We'll contact you soon.</span>
              </div>
            )}

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  placeholder="+91 12345 67890"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="tour-package">Tour Package Inquiry</option>
                  <option value="booking">Booking Information</option>
                  <option value="custom-trip">Custom Trip Planning</option>
                  <option value="travel-tips">Travel Tips & Advice</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your travel plans, questions, or requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full   text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}
              >
                Send Message
              </button>
            </div>

            {/* Bottom Note */}
            <p className="text-center text-sm text-gray-500 mt-6">
              We respect your privacy and will never share your information
            </p>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Working Hours
              </h3>
              <p className="text-gray-600">
                Monday - Saturday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quick Response
              </h3>
              <p className="text-gray-600">
                We typically respond<br />
                within 2-4 hours
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Local experts ready<br />
                to assist you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;