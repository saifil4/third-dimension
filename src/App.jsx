
import './App.css';
import PropertiesWindow from './layouts/PropertiesWindow';
import { Box, HStack } from '@chakra-ui/react';
import { useSelectedElement } from './context/selectedElementContext';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei'
import LeftMenu from './layouts/LeftMenu';


function App() {


  return (
    <HStack flexDirection="row" h="full" w="full">
      <LeftMenu />
      <Box w="calc(100% - 500px)" h="full" id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <OrbitControls />
        </Canvas>
      </Box>
      <PropertiesWindow />
    </HStack>
  )
}

export default App
