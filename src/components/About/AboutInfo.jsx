import "../../App.css";
const AboutInfo = () => {
  return (
    <div className="h-[120vh] bg-[#F3EDD3] relative flex flex-col items-center justify-center overflow-hidden px-6 ">
      <div className="">
        {/* Background Image */}
        <img
          src="/assets/rainbow-3.png"
          alt="rainbow1"
          className="absolute top-[14rem] left-0 select-none z-0"
          draggable="false"
          style={{
            width: "70vw",
            height: "100vh",
          }}
        />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl z-10">
          {/* Left Section - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/soil.png"
              alt="soil"
              className="w-[400px] h-[600px] z-50"
            />
          </div>

          {/* Right Section - Text */}
          <div className="flex-1 text-center md:text-left -mt-20">
            <h1 className="text-3xl md:text-4xl tracking-wide font-bold mb-4 luckiest-guy-large">
              About Us
            </h1>
            <h2 className="text-lg font-semibold mb-4 tracking-wider luckiest-guy-h2">
              The Big Bang: Uniting Minds & Earth for Lasting Change
            </h2>
            <p className="text-sm text-gray-800 mb-6 montserrat">
              The Big Bang is more than just an event—it&apos;s a movement, a
              spark igniting a wave of positive change. Join us in an
              interactive, action-packed experience that brings together people
              of all ages and backgrounds, each one with a passion for creating
              a healthier planet and healthier minds. At HOPE and The Psyche
              Project, we believe that true transformation happens when we break
              through barriers. That&apos;s why we&apos;re tackling two of
              today&apos;s biggest challenges—environmental action and mental
              health awareness—in one dynamic event. This isn&apos;t just about
              raising awareness; it&apos;s about diving deep, bridging gaps, and
              inspiring real, sustainable change.
            </p>
            <button className="bg-white hover:bg-gray-50 px-7 py-2 rounded-full border border-black border-b-4 shadow-md montserrat">
              Contact Us
            </button>
            <hr className="bg-black w-full h-[0.1rem] mt-5 mb-5" />
            <div className="flex flex-col montserrat">
              <span>Have any Questions?</span>
              <span>Contact us!</span>
            </div>
            <h1 className="luckiest-guy-custom-number text-3xl mt-7">
              +996 (4343) 4325665
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
