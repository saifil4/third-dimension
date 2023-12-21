import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useSelectedElement } from '../context/selectedElementContext';
import BoxGeometry from '../components/BoxGeometry';
import SphereGeometry from '../components/SphereGeometry';
import { OrbitControls } from '@react-three/drei'
import { Geometries } from '../Constants';


const CanvasArea = () => {

    const { allElements, isOrbitControlEnabled } = useSelectedElement();


    const getGeometry = (element, index) => {
        switch (element.type) {
            case Geometries.BOX_GEOMETRY:
                return <BoxGeometry element={element} key={index} />
            case Geometries.SPHERE_GEOMETRY:
                return <SphereGeometry element={element} key={index} />
            default:
                return null;
        }
    }

    return (
        <Canvas >
            <gridHelper args={[1000, 1000]} />
            <ambientLight intensity={1} />
            {
                allElements.map((element, index) => (
                    getGeometry(element, index)
                ))
            }
            <OrbitControls enabled={isOrbitControlEnabled} />
        </Canvas>
    )
}

export default CanvasArea