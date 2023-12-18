import {
    Box,
    Heading,
    Card,
    CardHeader,
    CardBody,
    Text,
    Stack,
    StackDivider
} from '@chakra-ui/react'
import { useSelectedElement } from '../context/selectedElementContext'
import { useEffect } from 'react';


function PropertiesWindow() {
    const { selectedElement } = useSelectedElement();

    useEffect(() => {
        selectedElement?.scale.setX(3)
        console.log(selectedElement)
    }, [selectedElement])


    return (
        <Box w="400px" h="full" bg="gray.200">
            <Card>
                <CardHeader>
                    <Heading size='md'>Properties</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            {
                                selectedElement ?
                                    <Text pt='2' fontSize='sm'>
                                        {selectedElement.position.x}
                                    </Text>
                                    :
                                    <Text pt='2' fontSize='sm'>
                                        No element selected
                                    </Text>
                            }
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Check out the overview of your clients.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See a detailed analysis of all your business clients.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}

export default PropertiesWindow