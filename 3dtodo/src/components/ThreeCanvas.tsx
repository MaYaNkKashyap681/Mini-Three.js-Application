import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
const DegToRad = (deg: number): number => {
  return (Math.PI * deg) / 180;
};

const ThreeD = () => {
  const ballRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <mesh
        receiveShadow
        castShadow
        scale={0.6}
        position={[0, 0, -2]}
        ref={ballRef}
      >
        <sphereBufferGeometry
          args={[3, 24, 24]}
          metalness={0.6}
          roughness={0.2}
        />
        <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.2} />
      </mesh>

      <mesh
        castShadow
        rotation={[-DegToRad(89), 0, 0]}
        receiveShadow
        scale={0.6}
        position={[0, -3, 0]}
      >
        <planeBufferGeometry args={[50, 50]} />
        <meshStandardMaterial color="#F4EEE0" />
      </mesh>
      <ambientLight args={["#443C68", 0.25]} />
      <pointLight args={["#0F3D3E", 2]} position={[-2, -1, 2]} />
      {/* <pointLight args={["#0F3D3E", 1]} position={[2, 2, -4]} /> */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#393646" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

const ThreeCanvas = () => {
  return (
    <div className="h-[100%]">
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, DegToRad(65), 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <ThreeD />
      </Suspense>
      <Preload all />
    </Canvas>
    </div>
  );
};

export default ThreeCanvas;
