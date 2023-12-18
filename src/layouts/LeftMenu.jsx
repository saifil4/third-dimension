import { GiCube, GiHolosphere, GiFinishLine } from 'react-icons/gi';
import { Box, VStack, chakra } from '@chakra-ui/react'
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { useSelectedElement } from '../context/selectedElementContext';


function LeftMenu() {

    const { addToCanvas } = useSelectedElement();

    const addCube = () => {
      
    }


    return (
        <Box w="100px" h="full" bg="gray.200">
            <VStack gap="10px">
                <IconContainer onClick={addCube}>
                    <GiCube />
                </IconContainer>
                <IconContainer>
                    <GiHolosphere />
                </IconContainer>
                <IconContainer>
                    <GiFinishLine />
                </IconContainer>
            </VStack>
        </Box>
    )
}

export default LeftMenu;

const IconContainer = chakra('span', {
    baseStyle: {
        fontSize: '25',
        cursor: 'pointer'
    }
})