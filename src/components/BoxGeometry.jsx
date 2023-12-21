import React from 'react';
import { PivotControls, TransformControls } from '@react-three/drei';
import { useSelectedElement } from '../context/selectedElementContext';

const BoxGeometry = ({ element }) => {

    const { selectElement, enableOrbitControl, disabeOrbitControl } = useSelectedElement();

    return (
        // <PivotControls onDragStart={disabeOrbitControl} onDragEnd={enableOrbitControl} >
        <TransformControls>
            <mesh onClick={() => selectElement(element)}>
                <boxGeometry args={...Object.values(element.props.args)} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </TransformControls>

        // </PivotControls >
    )
}

export default BoxGeometry