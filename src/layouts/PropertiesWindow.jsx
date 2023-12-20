import {
    Box,
    Heading,
    Card,
    CardHeader,
    CardBody,
    Input,
    FormControl,
    FormLabel
} from '@chakra-ui/react'
import { useSelectedElement } from '../context/selectedElementContext'
import { useState } from 'react';
import { useEffect } from 'react';

function PropertiesWindow() {


    const { selectedElement, updateArgs } = useSelectedElement();

    const [element, setElement] = useState(selectedElement);

    useEffect(() => {
        setElement(selectedElement)
    }, [selectedElement])


    const handleBlur = (e) => {
        updateArgs(element)
    }

    const handleChange = (e) => {
        setElement({
            ...element,
            props: {
                ...element.props,
                args: {
                    ...element.props.args,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    return (
        <Box w="400px" h="full" bg="gray.200">
            <Card h="full">
                <CardHeader>
                    <Heading size='md'>Properties</Heading>
                </CardHeader>
                <CardBody>
                    {
                        element &&
                        Object.entries(element.props.args).map(([key, value]) => (
                            <FormControl>
                                <FormLabel>{key}</FormLabel>
                                <Input onBlur={handleBlur} name={key} placeholder={key} value={value} onChange={handleChange} />
                            </FormControl>

                        ))
                    }
                </CardBody>
            </Card>
        </Box>
    )
}

export default PropertiesWindow