import React, { ReactNode, useContext, useState } from "react";
import { Object3D } from "three";

interface ISelectedElementContext {
    allElements: Array<number>,
    selectedElement: Object3D | null,
    addToCanvas: (id: number) => void,
    selectElement: (id: Object3D) => void
}

const SelectedElementContext = React.createContext<ISelectedElementContext>({
    allElements: [],
    selectedElement: null,
    addToCanvas(id) {},
    selectElement(id) {},
});

export const useSelectedElement = () => {
    return useContext(SelectedElementContext);
}

export const SelectedElementProvider = ({ children }: { children: ReactNode }) => {

    const [allElements, setAllElements] = useState<Array<number>>([]);

    const [selectedElement, setSelectedElement] = useState<Object3D | null>(null);

    const addToCanvas = (id: number) => {
        setAllElements([...allElements, id])
    }

    const selectElement = (item: Object3D) => {
        setSelectedElement(item)
    }

    const value: ISelectedElementContext = {
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