import Header from "../Global/Header";
import forest from "/assets/forest.png";
import "../../App.css";

const DayOne = () => {
  return (
    <div>
      <Header bgColor="bg-[rgb(116,83,67)]" textColor="text-[#F3EDD3]" />
      <div className="h-[90vh] bg-[rgb(116,83,67)] bg-opacity-80 flex flex-col justify-center relative">
        {/* Content Section */}
        <div className="max-w-9xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center h-full">
          {/* Left Side Content */}
          <div className="md:w-1/2 text-left -mt-52">
            <h1 className="text-4xl font-bold text-white mb-4 luckiest-guy-custom-number tracking-wide">
              Day 1
            </h1>
            <h2 className="text-4xl tracking-widest font-extrabold text-[#4C3328] mb-4 luckiest-guy-custom-number">
              Awareness & Exploration
            </h2>
            <p className="text-white opacity-80 text-lg font-thin w-3/4 montserrat">
              Kickoff Day focused on educating, inspiring, and engaging with
              sustainability and mental health basics.
            </p>
          </div>

          {/* Right Side Schedule */}
          <div className="md:w-1/2 mt-10 md:mt-96 md:ml-40">
            <ul className="space-y-6 text-right">
              <li className="flex justify-between border-b-2 border-dashed border-[#FFFFFF99] pb-2">
                {"  "}
              </li>
              <li className="flex justify-between border-b-2 border-dashed border-[#FFFFFF99] pb-2">
                <span className="text-[#422E21] font-bold text-lg">
                  9:00 - 10:00
                </span>
                <span className="text-white text-lg">Activity One</span>
              </li>
              <li className="flex justify-between border-b-2 border-dashed border-[#FFFFFF99] pb-2">
                <span className="text-[#422E21] font-bold text-lg">
                  10:00 - 11:00
                </span>
                <span className="text-white text-lg">Guest Speech</span>
              </li>
              <li className="flex justify-between border-b-2 border-dashed border-[#FFFFFF99] pb-2">
                <span className="text-[#422E21] font-bold text-lg">
                  11:00 - 12:00
                </span>
                <span className="text-white text-lg">Quiz Session</span>
              </li>
              <li className="flex justify-between border-b-2 border-dashed border-[#FFFFFF99] pb-2">
                <span className="text-[#422E21] font-bold text-lg">
                  12:00 - 1:00
                </span>
                <span className="text-white text-lg">Concert</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-0 left-0">
          <img src={forest} alt="Forest" className="w-[50rem]" />
        </div>
      </div>
      <div className="h-[10vh] bg-[rgb(116,83,67)]"></div>
    </div>
  );
};

export default DayOne;
