import { features } from "../constants/index";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      features.forEach((feature) => {
        const box = sectionRef.current?.querySelector(`.box${feature.id}`);
        if (box) {
          gsap.to(box, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
            },
          });
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="features" ref={sectionRef}>
      <h2>Apple Intelligence</h2>
      <div className="wrapper">
        {features.map((feature) => (
          <div key={feature.id} className={`box box${feature.id} ${feature.styles}`}>
            <img src={feature.icon} alt={feature.highlight} />
            <h3>{feature.highlight}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;