import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../App.css";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const faqRef = useRef(null);

  const stars = Array.from({ length: 25 }, () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    size: `${Math.random() * 20 + 10}px`,
    opacity: Math.random() * 0.5 + 0.5,
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rainbow",
        { scale: 0.8, y: -200, x: 200 },
        {
          scale: 1,
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      const faqItems = gsap.utils.toArray(".faq-item");
      faqItems.forEach((item, index) => {
        const isLast = index === faqItems.length - 1;
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: isLast ? 1.5 : 1.2,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: item,
              start: isLast ? "top 85%" : "top 90%",
              end: isLast ? "bottom 75%" : "bottom 80%",
              scrub: true,
            },
          }
        );
      });
    }, faqRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="bg-[#2F2F2F] min-h-screen px-6 py-10 relative overflow-hidden"
      ref={faqRef}
    >
      <img
        src="/assets/rainbow-4.png"
        alt="rainbow4"
        className="absolute bottom-0 left-0 select-none z-0 rainbow"
        draggable="false"
        style={{
          width: "30vw",
          height: "80vh",
        }}
      />
      <img
        src="/assets/rainbow-5.png"
        alt="rainbow5"
        className="absolute top-0 right-0 select-none z-0 rainbow"
        draggable="false"
        style={{
          width: "20vw",
          height: "80vh",
        }}
      />
      {/* FAQ Title */}
      <h1 className="text-center luckiest-guy-large pt-20 text-white text-2xl font-bold mb-10 tracking-wide">
        FREQUENTLY ASKED QUESTIONS
      </h1>
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

      {/* FAQ Items */}
      <div className="max-w-2xl mx-auto space-y-10 pt-10 montserrat">
        {/* Question 1 */}
        <div className="text-center faq-item">
          <h2 className="text-white text-lg font-semibold mb-2">
            Who all can participate?
          </h2>
          <p className="text-gray-300 text-sm">
            Anyone from the age of 10 to senior citizens can participate in this
            event. This event is fun and helpful for people from all age groups.
            All you have to do is register for the event.
          </p>
        </div>
        {/* Question 2 */}
        <div className="text-center faq-item">
          <h2 className="text-white text-lg font-semibold mb-2">
            Will there be exciting gifts and goodies?
          </h2>
          <p className="text-gray-300 text-sm">
            Yes. The event will be filled with surprises, gifts, goodies, and
            various activities for all the age groups.
          </p>
        </div>
        <div className="text-center faq-item">
          <h2 className="text-white text-lg font-semibold mb-2">
            Who all can participate?
          </h2>
          <p className="text-gray-300 text-sm">
            Anyone from the age of 10 to senior citizens can participate in this
            event. This event is fun and helpful for people from all age groups.
            All you have to do is register for the event.
          </p>
        </div>
        <div className="text-center faq-item">
          <h2 className="text-white text-lg font-semibold mb-2">
            Will there be exciting gifts and goodies?
          </h2>
          <p className="text-gray-300 text-sm">
            Yes. The event will be filled with surprises, gifts, goodies, and
            various activities for all the age groups.
          </p>
        </div>
        <div className="text-center faq-item">
          <h2 className="text-white text-lg font-semibold mb-2">
            Who all can participate?
          </h2>
          <p className="text-gray-300 text-sm">
            Anyone from the age of 10 to senior citizens can participate in this
            event. This event is fun and helpful for people from all age groups.
            All you have to do is register for the event.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center place-items-center tracking-widest mt-32">
        <h3 className="luckiest-guy-small-outline-yellow luckiest-guy-custom-number text-2xl tracking-wide">
          DON&apos;T MISS OUT ON OUR EVENT&nbsp;
        </h3>
        <span className="text-[#F3EDD3] luckiest-guy-custom-number text-2xl cursor-pointer hover:underline">
          HIGHLIGHTS
        </span>
      </div>
    </div>
  );
};

export default Faq;
