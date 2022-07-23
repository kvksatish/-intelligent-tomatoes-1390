import React, { useState } from 'react'
import { Search2Icon } from "@chakra-ui/icons"
import FocusLock from "react-focus-lock"
import { useNavigate } from 'react-router'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,

    PopoverArrow,


    Input,


    Button,
    useDisclosure,
    Box,



} from '@chakra-ui/react'


const Searchbar = () => {
    const [text, settext] = useState("")
    const { onOpen, onClose, isOpen } = useDisclosure()

    let navigate = useNavigate();

    return (
        <div>

            <Popover
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                placement='top-end'
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <Search2Icon style={{ cursor: "pointer" }} boxSize={"24px"} />
                </PopoverTrigger>
                <PopoverContent p={1}>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <Box display="flex" alignItems="center" gap="1rem" justifyContent="space-between">
                            <Input size="xl" pl="0.5rem" variant='unstyled' placeholder='Search on DNA...' value={text} onChange={(e) => settext(e.target.value)} />
                            <Button colorScheme="gray" bg="black" color="white" onClick={() => {
                                {
                                    text &&

                                        navigate(`/${text}`)
                                    onClose()
                                    settext("")
                                }


                            }}>GO</Button></Box>
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Searchbar






// //

// // 1. Create a text input component
// const TextInput = React.forwardRef((props, ref) => {
//     return (
//         <FormControl>
//             <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
//             <Input ref={ref} id={props.id} {...props} />
//         </FormControl>
//     )
// })

// // 2. Create the form
// const Form = ({ firstFieldRef, onCancel }) => {
//     return (
//         <Box display="flex" alignItems="center" gap="1rem" justifyContent="space-between" >
//             <Box>
//                 <Input value={text} size="xl" pl="0.5rem" variant='unstyled' placeholder='Search on DNA...' onChange={(e) => settext(e.target.value)} />
//             </Box>
//             <Box>
//                 <ButtonGroup display='flex' justifyContent='flex-end'>
//                     <Button bg="black" color="white" onClick={() => console.log(text)} >
//                         GO
//                     </Button>
//                 </ButtonGroup></Box>
//         </Box>


//     )
// }

// // 3. Create the Popover
// // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
// const PopoverForm = () => {
//     const { onOpen, onClose, isOpen } = useDisclosure()
//     const firstFieldRef = React.useRef(null)

//     return (
//         <>

//             <Popover
//                 isOpen={isOpen}
//                 initialFocusRef={firstFieldRef}
//                 onOpen={onOpen}
//                 onClose={onClose}
//                 placement='bottom-end'
//                 closeOnBlur={false}

//             >
//                 <PopoverTrigger>
//                     <Search2Icon style={{ cursor: "pointer" }} boxSize={"24px"} />
//                 </PopoverTrigger>
//                 <PopoverContent p={1}>
//                     <FocusLock returnFocus persistentFocus={false}>
//                         <PopoverArrow />
//                         <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
//                     </FocusLock>
//                 </PopoverContent>
//             </Popover>
//         </>
//     )
// }

// const [text, settext] = useState("")