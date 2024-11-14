import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vine from "/assets/vine.png";
import flower from "/assets/flower.png";
import leaves from "/assets/leaves.png";
import cityscape from "/assets/cityscape.png";
import "../../App.css";

const About = () => {
  // Fixed positions for leaves
  const leavesPositions = [
    { top: "60vh", left: "10vw", size: "70px", opacity: 0.8 },
    { top: "5vh", left: "40vw", size: "40px", opacity: 0.6 },
    { top: "10vh", left: "70vw", size: "80px", opacity: 0.7 },
    { top: "30vh", left: "80vw", size: "40px", opacity: 0.7 },
    { top: "60vh", left: "70vw", size: "50px", opacity: 0.5 },
    { top: "70vh", left: "20vw", size: "40px", opacity: 0.6 },
    { top: "70vh", left: "40vw", size: "55px", opacity: 0.9 },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".vine",
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        duration: 2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".flower",
      {
        y: -200,
        x: 200,
        scale: 0.5,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        duration: 2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="h-[90vh] bg-[#F3EDD3] relative overflow-hidden flex items-center justify-end p-10 about-container">
      {/* Fixed position leaves */}
      {leavesPositions.map((leaf, index) => (
        <img
          key={index}
          src="/assets/bg-leaves.png"
          alt="leaf"
          className="absolute select-none z-20"
          draggable="false"
          style={{
            top: leaf.top,
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            opacity: leaf.opacity,
          }}
        />
      ))}

      {/* Flower Image with class for GSAP */}
      <img
        src={flower}
        alt="Flower"
        className="absolute -top-2 -right-2 z-50 flower"
        style={{ width: "350px" }}
      />

      {/* Leaves Image */}
      <img
        src={leaves}
        alt="Leaves"
        className="absolute bottom-40 right-32 z-50"
        style={{ width: "150px" }}
      />

      {/* Cityscape Image */}
      <img
        src={cityscape}
        alt="Cityscape"
        className="absolute bottom-0 w-full z-50"
      />

      {/* Vine Image with class for GSAP */}
      <img
        src={vine}
        alt="Vine"
        className="absolute top-2 left-10 z-50 vine"
        style={{ width: "500px" }}
      />

      <div className="flex max-w-2xl w-1/2 z-50">
        <div className="text-left max-w-lg ">
          <h1 className="flex flex-col text-3xl gap-5 font-bold mb-4 luckiest-guy-regular">
            WHAT IS <span className="text-6xl">BIG BANG?</span>
          </h1>
          <p className="text-lg text-[#9A6C51] mb-6">
            The Big Bang is more than just an event—it&apos;s a movement, a
            spark igniting a wave of positive change. Join us in an interactive,
            action-packed experience that brings together people of all ages and
            backgrounds, each one with a passion for creating a healthier planet
            and healthier minds.
          </p>
          <button className="bg-white text-black border-2 border-black border-b-8 border-l-4 px-10 py-2 rounded-full ">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
