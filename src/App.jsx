
import './App.css';
import PropertiesWindow from './layouts/PropertiesWindow';
import { Box, HStack } from '@chakra-ui/react';
import { useSelectedElement } from './context/selectedElementContext';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PivotControls } from '@react-three/drei'
import LeftMenu from './layouts/LeftMenu';
import BoxGeometry from './components/BoxGeometry';


function App() {

  const { selectElement, allElements, isOrbitControlEnabled, enableOrbitControl, disabeOrbitControl } = useSelectedElement();
  return (
    <HStack flexDirection="row" h="full" w="full">
      <LeftMenu />
      <Box w="calc(100% - 500px)" h="full" id="canvas-container">
        <Canvas >
          <ambientLight intensity={1} />
          {
            allElements.map((element, index) => (
              <BoxGeometry element={element} key={index}/>
            ))
          }
          <OrbitControls enabled={isOrbitControlEnabled} />
        </Canvas>
      </Box>
      <PropertiesWindow />
    </HStack>
  )
}

export default App;