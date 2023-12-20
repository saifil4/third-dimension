import React, { useContext, useState } from "react";

const SelectedElementContext = React.createContext(null);

export const useSelectedElement = () => {
    return useContext(SelectedElementContext);
}

export const SelectedElementProvider = ({ children }) => {



    const [selectedElement, setSelectedElement] = useState(null);
    const [isOrbitControlEnabled, setIsOrbitControlEnabled] = useState(true);

    const element = {
        id: 1,
        type: 'box',
        props: {
            args: {
                height: 1,
                width: 1,
                depth: 1
            },
        }
    }

    const enableOrbitControl = () => {
        setIsOrbitControlEnabled(true)
    }

    const disabeOrbitControl = () => {
        setIsOrbitControlEnabled(false)
    }

    const [allElements, setAllElements] = useState([element]);

    const selectElement = (item) => {
        setSelectedElement(item)
    }

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
        disabeOrbitControl
    }


    return (
        <SelectedElementContext.Provider value={value}>
            {children}
        </SelectedElementContext.Provider>
    )

}