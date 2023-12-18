import { GiCube, GiHolosphere, GiFinishLine } from 'react-icons/gi';
import { Box, VStack, chakra } from '@chakra-ui/react'
import { BoxGeometry, MeshBasicMaterial, Mesh, Scene, PerspectiveCamera } from 'three';
import { useSelectedElement } from '../context/selectedElementContext';

interface Props {
    animate: () => void,
    scene: Scene,
    camera: PerspectiveCamera
}

function LeftMenu({ animate, scene, camera }: Props) {

    const { addToCanvas } = useSelectedElement();

    const addCube = () => {
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Mesh(geometry, material)
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        addToCanvas(cube.id);
        scene.add(cube);
        camera.position.z = 5;
        animate();
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