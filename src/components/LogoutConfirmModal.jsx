import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import ConfirmLogoutIcon from "../assets/icons/COnfirmLogoutIcon";

export default function LogoutConfirmModal({
  isOpen,
  onClose,
  onConfirmLogout,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      {/* Overlay */}
      <ModalOverlay bg="#DCF1FFE5" backdropFilter="blur(6px)" />

      <ModalContent
        borderRadius="2xl"
        maxW="480px"
        className="shadow-2xl"
      >
        <ModalCloseButton
          top={4}
          right={4}
          bg="pink.500"
          color="white"
          rounded="full"
          _hover={{ bg: "pink.600" }}
        />

        <ModalBody py={10} px={8} textAlign="center">
          {/* Icon */}
          <Flex justify="center" mb={4}>
            <Box
              w="64px"
              h="64px"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="gray.700"
              fontSize="28px"
            >
              {/* <FiLogOut /> */}
              <ConfirmLogoutIcon/>
            </Box>
          </Flex>

          {/* Text */}
          <Text fontSize="24px" fontWeight="bold" mb={2}>
            Are you sure, you want to Logout?
          </Text>

          <Text fontSize="16px" fontWeight="medium" color="#33333399" mb={10}>
            Logging out will end your session.
          </Text>

          {/* Actions */}
          <Flex justify="center" gap={4}>
            <Button
              variant="outline"
              borderColor="#333333CC"
              bg='#fff'
              color='#333333'
              fontSize='16px'
              fontWeight='600'
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              bg='#EA1D78'
              color='#fff'
              onClick={onConfirmLogout}
            >
              Yes
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
