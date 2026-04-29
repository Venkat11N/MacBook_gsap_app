import { Canvas } from "@react-three/fiber"
import StudioLights from "./three/StudioLights"
import { features } from "../constants"
import clsx from "clsx"
import { Suspense, useEffect, useRef } from "react"
import MacbookModel from "./models/Macbook"
import { useMediaQuery } from "react-responsive"
import { Html } from "@react-three/drei"
import useMacbookStore from "../store/index"

const ModelScroll = () => {
  const groupRef = useRef(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px'})
  const {setTexture} = useMacbookStore();


  useEffect(() => {
    
  }, [])
  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase"></h1></Html>}>
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  )
}

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <div className="relative">
        <Canvas id="f-canvas">
            <StudioLights />
            <ambientLight intensity={0.5} />
            <ModelScroll />
        </Canvas>
        <div className="absolute inset-0">
            {features.map((feature, index) => (
              <div key={index} className={clsx('box', `box${index + 1}, features.styles`)}>{feature.text}</div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Features







