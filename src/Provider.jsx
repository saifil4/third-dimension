import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { SelectedElementProvider } from './context/selectedElementContext';

function Provider({ children }) {
    return (
        <SelectedElementProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </SelectedElementProvider>
    )
}

export default Provider;