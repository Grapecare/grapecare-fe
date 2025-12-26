import { Box, Button, HStack, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ArrTopRight from '../assets/icons/ArrTopRight'


const presetAmounts = [5000, 10000, 15000, 20000]
function Donator() {
    const [amount, setAmount] = useState('')

    const handlePresetClick = (value) => {
        setAmount(value)
    }

    const handleSubmit = () => {
        console.log('Submitted amount:', amount)
        // send to API / payment gateway
    }
    return (
        <div className="bg-[#DCF1FF] rounded-xl p-7">
            <Box maxW="400px" w="100%">
                {/* INPUT */}
                <Input
                    type="number"
                    value={amount}
                    placeholder="Enter amount"
                    onChange={(e) => setAmount(e.target.value)}
                    mb={4}
                    bg='#fff'
                    fontWeight={700}
                    color='#333333'
                />

                {/* PRESET BUTTONS */}
                <SimpleGrid columns={2} spacing={3} mb={4} px={8}>
                    {presetAmounts.map((value) => (
                    <Button
                        key={value}
                        w="100%"
                        variant={amount == value ? 'solid' : 'outline'}
                        colorScheme="blue"
                        onClick={() => handlePresetClick(value)}
                    >
                        ₦{value.toLocaleString()}
                    </Button>
                    ))}
                </SimpleGrid>

                {/* SUBMIT */}
                <Button 
                    w='100%'
                    isDisabled={!amount}
                    onClick={handleSubmit}
                    rightIcon={<ArrTopRight color='#fff' />} color='#fff' bg='#EA1D78'
                >Donate Now</Button>
            </Box>
        </div>
    )
}

export default Donator