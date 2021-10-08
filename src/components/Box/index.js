import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box({ position }) {
  const mesh = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useFrame(state => {
    const time = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(time * 2) / 100;
    mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
  })

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setIsActive(!isActive)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isActive ? '#820263' : '#d90368'} />
    </mesh>
  )
}
