import { GiCube, GiHolosphere, GiFinishLine } from 'react-icons/gi';
import { Box, VStack, chakra } from '@chakra-ui/react'
import { useSelectedElement } from '../context/selectedElementContext';
import { Geometries } from '../Constants';

function LeftMenu() {

    const { addNewElement } = useSelectedElement();

    return (
        <Box w="100px" h="full" bg="gray.200">
            <VStack gap="10px">
                <IconContainer onClick={() => addNewElement(Geometries.BOX_GEOMETRY)}>
                    <GiCube />
                </IconContainer>
                <IconContainer onClick={() => addNewElement(Geometries.SPHERE_GEOMETRY)}>
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