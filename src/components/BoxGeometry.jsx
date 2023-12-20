import React from 'react';
import { PivotControls } from '@react-three/drei';
import { useSelectedElement } from '../context/selectedElementContext';

const BoxGeometry = ({ element }) => {

    const { selectElement, enableOrbitControl, disabeOrbitControl } = useSelectedElement();

    return (
        <PivotControls onDragStart={disabeOrbitControl} onDragEnd={enableOrbitControl} >
            <mesh onClick={() => selectElement(element)}>
                <boxGeometry args={...Object.values(element.props.args)} />
                <meshStandardMaterial color="hotpink" transparent />
            </mesh>
        </PivotControls >
    )
}

export default BoxGeometry