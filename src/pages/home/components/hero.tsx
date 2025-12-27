const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Hero Background */}
      <div className="absolute inset-0 animate-[float_20s_ease-in-out_infinite]">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20d%3D%22M0%2C96L48%2C112C96%2C128%2C192%2C160%2C288%2C160C384%2C160%2C480%2C128%2C576%2C122.7C672%2C117%2C768%2C139%2C864%2C144C960%2C149%2C1056%2C139%2C1152%2C128C1248%2C117%2C1344%2C107%2C1392%2C101.3L1440%2C96L1440%2C320L1392%2C320C1344%2C320%2C1248%2C320%2C1152%2C320C1056%2C320%2C960%2C320%2C864%2C320C768%2C320%2C672%2C320%2C576%2C320C480%2C320%2C384%2C320%2C288%2C320C192%2C320%2C96%2C320%2C48%2C320L0%2C320Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] bg-bottom bg-cover bg-no-repeat"
        />
      </div>

      {/* Hero Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-[2] text-center max-w-[1200px] px-8 animate-[fadeInUp_1s_ease-out]">
        {/* Badge */}
        <div className="inline-block px-6 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold tracking-wider mb-8 border border-white/30 animate-pulse">
          ✨ HIMALAYAN PARADISE AWAITS
        </div>

        {/* Title */}
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold text-white mb-6 leading-[1.1] [text-shadow:_0_4px_20px_rgba(0,0,0,0.3)]">
          Discover the
          <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Magic of Sikkim
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/90 max-w-[700px] mx-auto mb-16 leading-relaxed">
          Journey through pristine valleys, ancient monasteries, and snow-capped
          peaks in India's most enchanting Himalayan state
        </p>

        {/* Action Buttons */}
        <div className="flex gap-6 justify-center flex-wrap mb-16 max-md:flex-col max-md:w-full max-md:px-6">
          <button 
            className="group relative px-10 py-4 rounded-xl text-lg font-semibold tracking-wide text-white border-2 border-transparent shadow-sm transition-all duration-200 inline-flex items-center justify-center overflow-hidden hover:-translate-y-1 hover:shadow-2xl active:-translate-y-0.5 active:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-200 focus-visible:outline-offset-2 max-md:w-full max-md:py-3.5 max-md:text-base"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)';
            }}
          >
            <span 
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
            <a href="#destinations">
              <span className="relative">Start Your Adventure</span>
            </a>
            <span className="relative inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
          <button 
            className="group relative px-10 py-4 rounded-xl text-lg font-semibold tracking-wide text-white bg-gray-800 border-2 border-gray-800 shadow-sm transition-all duration-200 inline-flex items-center justify-center overflow-hidden hover:bg-gray-600 hover:border-gray-600 hover:-translate-y-0.5 hover:shadow-lg active:-translate-y-0 active:shadow-md focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-200 focus-visible:outline-offset-2 max-md:w-full max-md:py-3.5 max-md:text-base"
          >
            <span 
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
            <span className="relative inline-block mr-2">▶</span>
            <span className="relative">Watch Journey</span>
          </button>
        </div>

        {/* Feature Items */}
        <div className="flex gap-12 justify-center flex-wrap max-md:flex-col max-md:gap-4">
          <div className="flex items-center gap-2 text-white font-medium px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15">
            <span className="text-2xl">🏔️</span>
            <span>Himalayan Peaks</span>
          </div>
          <div className="flex items-center gap-2 text-white font-medium px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15">
            <span className="text-2xl">💧</span>
            <span>Sacred Rivers</span>
          </div>
          <div className="flex items-center gap-2 text-white font-medium px-6 py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15">
            <span className="text-2xl">🌲</span>
            <span>Ancient Forests</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
     

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translate(-50%, 0);
          }
          40% { opacity: 1; }
          80% {
            opacity: 0;
            transform: translate(-50%, 16px);
          }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HomeHero;