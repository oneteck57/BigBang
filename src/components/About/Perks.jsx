import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cityscape from "/assets/cityscape.png";
import "../../App.css";

gsap.registerPlugin(ScrollTrigger);

const Perks = () => {
  const perksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".perk-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0.4,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      });
    }, perksRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="bg-[#745343] pt-[60vh] pb-32 relative h-[130vh] -mt-[50vh]"
      ref={perksRef}
    >
      <img
        src={cityscape}
        alt="Cityscape"
        className="absolute bottom-0 w-full z-50 opacity-20"
      />
      <p className="uppercase montserrat text-center text-sm mb-4 text-white perk-item">
        Become one of us!
      </p>
      <h2 className="perk-item text-center text-3xl font-bold text-white mb-10 luckiest-guy-custom-number tracking-wider">
        Perks of Attending This Event
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
        <div className="text-white p-6 flex flex-row gap-2 perk-item">
          <h3 className="text-8xl font-semibold mb-3 text-[#EAEAEA80] abel">
            1
          </h3>
          <div className="flex flex-col text-white">
            <h1 className="text-white text-3xl mb-2">sfsf</h1>
            <p className="text-[#FFFFFF] text-sm montserrat">
              Your membership of NHCA supports the representation of hookah
              interests with legislative bodies, lawmakers, and regulators at
              the federal, state, and local levels. The hookah sector and
              culture needs a strong unified voice in defending our businesses.
              Membership not only supports efforts to protect your business but
              also gives you a voice at the table in shaping our policy
              priorities for the industry in the future.
            </p>
          </div>
        </div>
        <div className="text-white p-6 flex flex-row gap-2 perk-item">
          <h3 className="text-8xl font-semibold mb-3 text-[#EAEAEA80] abel">
            2
          </h3>
          <div className="flex flex-col text-white">
            <h1 className="text-white text-3xl mb-2">sfsf</h1>
            <p className="text-[#FFFFFF] text-sm montserrat">
              Your membership of NHCA supports the representation of hookah
              interests with legislative bodies, lawmakers, and regulators at
              the federal, state, and local levels.
            </p>
          </div>
        </div>
        <div className="text-white p-6 flex flex-row gap-2 perk-item">
          <h3 className="text-8xl font-semibold mb-3 text-[#EAEAEA80] abel">
            3
          </h3>
          <div className="flex flex-col text-white">
            <h1 className="text-white text-3xl mb-2">sfsf</h1>
            <p className="text-[#FFFFFF] text-sm montserrat">
              Your membership of NHCA supports the representation of hookah
              interests with legislative bodies, lawmakers, and regulators at
              the federal, state, and local levels. The hookah sector and
              culture needs a strong unified voice in defending our businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
