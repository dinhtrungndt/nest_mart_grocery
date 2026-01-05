const EmailSubscribe = ({
  backgroundImage,
  personImage,
  onFocus,
  onBlur,
  className = "pt-4"
}) => {
  return (
    <div className={`${className} relative`}>
      <img
        src={backgroundImage}
        alt="Subscribe Background"
        className="w-full h-64 md:h-auto object-cover rounded-2xl"
      />
      {personImage && (
        <img
          src={personImage}
          alt="Person"
          className="absolute w-1/2 md:w-1/3 bottom-0 right-0 rounded-br-2xl hidden md:block"
        />
      )}
      <div className="absolute top-1/2 left-4 md:left-24 transform -translate-y-1/2 md:transform-none md:top-1/4 space-y-2 w-full md:w-auto pr-4 md:pr-0">
        <p className="text-2xl md:text-4xl font-bold font-quicksand line-clamp-2">
          Stay home & get your daily <br className="hidden md:block" /> needs from our shop
        </p>
        <p className="text-lg md:text-xl font-medium font-quicksand">
          Start Your Daily Shopping with <span className="text-primary">Nest Mart</span>
        </p>
        <div className="flex justify-center md:justify-start">
          <div className="mt-6 border border-gray-300 rounded-full bg-white w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-primary flex justify-between">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 focus:outline-none rounded-full w-full text-sm text-gray-700"
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primaryDark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
