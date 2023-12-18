import React, { useContext, useState } from "react";

const SelectedElementContext = React.createContext({
    allElements: [],
    selectedElement: null,
    addToCanvas(id) {},
    selectElement(id) {},
});

export const useSelectedElement = () => {
    return useContext(SelectedElementContext);
}

export const SelectedElementProvider = ({ children }) => {

    const [allElements, setAllElements] = useState([]);

    const [selectedElement, setSelectedElement] = useState(null);

    const addToCanvas = (id) => {
        setAllElements([...allElements, id])
    }

    const selectElement = (item) => {
        setSelectedElement(item)
    }

    const value = {
        allElements: allElements,
        selectedElement: selectedElement,
        addToCanvas: addToCanvas,
        selectElement: selectElement
    }


    return (
        <SelectedElementContext.Provider value={value}>
            {children}
        </SelectedElementContext.Provider>
    )

}