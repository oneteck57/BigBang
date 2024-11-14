import { useEffect, useRef } from "react";
import "../../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Global/Header";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const stars = Array.from({ length: 25 }, () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    size: `${Math.random() * 20 + 10}px`,
    opacity: Math.random() * 0.5 + 0.5,
  }));

  const busRef = useRef(null);
  const roadRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    const busElement = busRef.current;
    const globeElement = globeRef.current;
    const roadElement = roadRef.current;
    const boyElement = document.querySelector("img[alt='boy']");
    const brainElement = document.querySelector("img[alt='brainyoga']");

    gsap.to(busElement, {
      x: "-100vw",
      ease: "none",
      scrollTrigger: {
        trigger: roadElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(globeElement, {
      y: "50vh",
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: globeElement,
        start: "top ",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(boyElement, {
      x: "50vw",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(brainElement, {
      y: "2vw",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <>
      <Header />
      <div className="landing h-[140vh] bg-[#2F2F2F] relative overflow-hidden flex flex-col items-center justify-center text-center text-white">
        {/* Globe */}
        <img
          ref={globeRef}
          src="/assets/earth.png"
          alt="globe"
          className="absolute select-none -mt-60"
          draggable="false"
          style={{
            width: "660px",
            height: "660px",
            zIndex: 10,
          }}
        />

        {/* Clouds */}
        <img
          src="/assets/clouds-removebg-1.png"
          alt="cloud1"
          className="absolute top-10 left-0 select-none"
          draggable="false"
          style={{
            width: "200px",
            height: "auto",
            zIndex: 9,
          }}
        />
        <img
          src="/assets/clouds-removebg-2.png"
          alt="cloud2"
          className="absolute top-0 right-0 select-none"
          draggable="false"
          style={{
            width: "200px",
            height: "auto",
            zIndex: 9,
          }}
        />

        {/* Rainbow Stripes */}
        <img
          src="/assets/rainbow-1.png"
          alt="rainbow1"
          className="absolute top-0 left-0 select-none"
          draggable="false"
          style={{
            width: "40vw",
            height: "50vh",
          }}
        />
        <img
          src="/assets/rainbow-2.png"
          alt="rainbow2"
          className="absolute -bottom-2 right-0 select-none"
          draggable="false"
          style={{
            width: "40vw",
            height: "80vh",
          }}
        />

        {/* Boy Image */}
        <img
          src="/assets/guy.png"
          alt="boy"
          className="absolute top-36 right-0 select-none"
          draggable="false"
          style={{
            width: "200px",
            height: "auto",
            zIndex: 11,
          }}
        />

        {/* Brain Yoga */}
        <img
          src="/assets/brainYoga.png"
          alt="brainyoga"
          className="absolute bottom-[26rem] left-40 select-none"
          draggable="false"
          style={{
            width: "140px",
            height: "auto",
            zIndex: 11,
          }}
        />

        {/* Title, Button, and Paragraph */}
        <div className="relative z-20 mt-24 flex flex-col items-center luckiest-guy-small">
          <h1 className="text-8xl font-bold mb-4 luckiest-guy-regular luckiest-guy-outline">
            THE BIG BANG
          </h1>
          <button className="bg-[#F3EDD3] font-sans text-lg font-normal border-2 border-black text-black px-6 py-2 rounded-full mb-4  hover:bg-[#fcf0bd]  transition-colors">
            Get your Tickets
          </button>
          <p className="text-lg text-[#F3EDD3] font-medium italic mt-10 tracking-widest ">
            {`"Two causes, one purpose: Empowering people, healing planet"`}
          </p>
        </div>

        {/* Swish Image */}
        <img
          src="/assets/swish.png"
          alt="swish"
          className="absolute bottom-[15rem] select-none"
          draggable="false"
          style={{
            width: "20vw",
            height: "auto",
            zIndex: 8,
          }}
        />

        {/* Stars */}
        {stars.map((star, index) => (
          <img
            key={index}
            src="/assets/star.png"
            alt="star"
            className="absolute select-none"
            draggable="false"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
      {/* Road Image Container */}
      <div ref={roadRef} className="w-full bg-[#2F2F2F] relative">
        {/* Bus Image */}
        <img
          ref={busRef}
          src="/assets/bus.png"
          alt="bus"
          className="absolute bottom-0 right-0 select-none"
          draggable="false"
          style={{
            width: "40vw",
            height: "auto",
            zIndex: 9,
          }}
        />

        {/* Road Image */}
        <img
          src="/assets/road.png"
          alt="road"
          className="w-full select-none"
          draggable="false"
          style={{
            height: "auto",
            zIndex: 8,
          }}
        />
      </div>
    </>
  );
};

export default Landing;
