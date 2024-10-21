const Heading = ({ title }) => {
  return (
    <div className="relative mb-16 overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-gray-100 relative z-10 break-words">
        {title.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block hover:animate-bounce hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
              char === ' ' ? 'w-2' : ''
            }`}
          >
            {char}
          </span>
        ))}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">.</span>
      </h2>
      
      {/* Decorative elements */}
      <svg className="absolute top-1/2 left-0 transform -translate-y-1/2 -z-10 opacity-50" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" stroke="url(#paint0_linear)" strokeWidth="4" />
        <circle cx="60" cy="60" r="40" stroke="url(#paint1_linear)" strokeWidth="4" strokeDasharray="10 5" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-indigo-500/10 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Heading;
