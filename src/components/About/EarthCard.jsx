const EarthCard = () => {
  return (
    <div className="relative -mt-32 z-20">
      <div className="flex items-center justify-center bg-white bg-opacity-30 rounded-xl w-full py-10 px-4 z-[99999]">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white border rounded-lg w-full max-w-6xl p-10 shadow-lg overflow-hidden">
          {/* Left Section: Text */}
          <div className="flex-1 text-left px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4F4B3D]">
              The Big Bang is a Place Where
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Knowledge meets action:</strong> Learn hands-on strategies
              to reduce waste, live sustainably, and care for our planet.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Mental wellness meets openness:</strong> Discover tools
              for emotional well-being, reduce stigma, and create supportive,
              thriving communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal is to make environmental responsibility and mental
              wellness accessible and fun. Together, we&apos;re building a
              future where a healthy planet and healthy minds go hand in hand.
            </p>
          </div>

          {/* Right Section: Earth Image */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <img
              src="/assets/green-earth.png"
              alt="Earth"
              className="w-[300px] md:w-[450px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthCard;
