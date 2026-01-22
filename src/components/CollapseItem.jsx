import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function CollapseItem ({ icon, title, children, link }) {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate()

  return (
    <Box>
      {/* Header */}
      <Flex
        align="center"
        justify="space-between"
        py={4}
        cursor="pointer"
        // onClick={onToggle}
        _hover={{ bg: "gray.50" }}
        onClick={()=>{navigate(link)}}
      >
        <Flex align="center" gap={4}>
          <Box
            w="40px"
            h="40px"
            rounded="full"
            border="1px solid"
            borderColor="gray.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.500"
          >
            {icon}
          </Box>

          <Text fontWeight="medium" fontSize="20px" color="#333333">{title}</Text>
        </Flex>

        <IconButton
          aria-label="Toggle"
          icon={<ChevronRightIcon />}
          size="sm"
          transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"}
          transition="transform 0.2s ease"
          bg='transparent'
        />
      </Flex>

      {/* Content */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} pl="56px" color="gray.600">
          {children}
        </Box>
      </Collapse>

      {/* Divider */}
      <Box h="1px" bg="gray.200" />
    </Box>
  );
};

export default CollapseItem
