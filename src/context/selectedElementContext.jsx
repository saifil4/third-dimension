import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Geometries } from "../Constants";

const SelectedElementContext = React.createContext(null);

export const useSelectedElement = () => useContext(SelectedElementContext);

const getNewElement = (geometry) => {
    const element = {
        id: uuidv4(),
        type: geometry,
        props: {
            args: {
                height: 1,
                width: 1,
                depth: 1
            },
        }
    }
    return element;
}



export const SelectedElementProvider = ({ children }) => {

    const [selectedElement, setSelectedElement] = useState(null);
    const [isOrbitControlEnabled, setIsOrbitControlEnabled] = useState(true);
    const [allElements, setAllElements] = useState([]);

    const enableOrbitControl = () => setIsOrbitControlEnabled(true)
    const disabeOrbitControl = () => setIsOrbitControlEnabled(false)
    const selectElement = (item) => setSelectedElement(item)
    const addNewElement = (geometry) => setAllElements(prev => [...prev, getNewElement(geometry)])

    const updateArgs = (updatedElement) => {
        if (!updatedElement) return null;
        setAllElements(prev => prev.map(element => {
            return updatedElement.id === element.id ? updatedElement : element;
        }))
    }

    const value = {
        selectedElement,
        isOrbitControlEnabled,
        allElements,
        selectElement,
        updateArgs,
        enableOrbitControl,
        disabeOrbitControl,
        addNewElement
    }

    return (
        <SelectedElementContext.Provider value={value}>
            {children}
        </SelectedElementContext.Provider>
    )

}