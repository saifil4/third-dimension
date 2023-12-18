import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import { SelectedElementProvider } from './context/selectedElementContext';

function Provider({ children }: { children: React.ReactNode }) {
    return (
        <SelectedElementProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </SelectedElementProvider>
    )
}

export default Provider;