import { performanceImages, performanceImgPositions } from "../constants/index";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(
    () => {
      const content = sectionRef.current?.querySelector(".content p");
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut",
          duration: 2,
          overwrite: "auto",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach(({ id, left, right, bottom }) => {
        if (id === "p5") return;

        const toVars = { y: 0, autoAlpha: 1 };
        if (left !== undefined) toVars.left = `${left}%`;
        if (right !== undefined) toVars.right = `${right}%`;
        if (bottom !== undefined) toVars.bottom = `${bottom}%`;

        tl.to(`.${id}`, toVars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} alt={id} className={id} />
        ))}
      </div>

      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so {''} <span className="text-white"> gaming feels more immersive and realistic than ever. </span>{''}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
};

export default Performance;
