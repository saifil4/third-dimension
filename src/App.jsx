
import './App.css';
import { Box, HStack } from '@chakra-ui/react';
import PropertiesWindow from './layouts/PropertiesWindow';
import LeftMenu from './layouts/LeftMenu';
import CanvasArea from './layouts/CanvasArea';

function App() {
  return (
    <HStack flexDirection="row" h="full" w="full">
      <LeftMenu />
      <Box w="calc(100% - 500px)" h="full" id="canvas-container">
        <CanvasArea />
      </Box>
      <PropertiesWindow />
    </HStack>
  )
}

export default App;