import React, { useRef, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Avatar, Box, Button, IconButton, Spinner, useDisclosure } from '@chakra-ui/react'
import LogoutConfirmModal from '../components/LogoutConfirmModal';
import { logout } from '../services/auth';
import { FiEdit2 } from 'react-icons/fi';

function ProfileInfo() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const fileInputRef = useRef(null);
    const [avatar, setAvatar] = useState("https://bit.ly/sage-adebayo");
    const [isUploading, setIsUploading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Optional: Validate file type
        if (!file.type.startsWith("image/")) {
            alert("Please select an image file");
            return;
        }

        setIsUploading(true);

        // Preview immediately
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
            setIsUploading(false);
        };
        reader.readAsDataURL(file);

        // 🔥 Replace this with actual upload logic (API call)
        // uploadAvatar(file)
    };

    const handleLogout = () => {
        logout();
        onClose();
        navigate('/login');
    };
    return (
        <div>
            <PageHeader title="Profile" />
            <div className="flex gap-5">
                <div className="border border-[#33333333] py-20 px-10 rounded-[20px] w-3/12 flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <Avatar src='https://bit.ly/sage-adebayo' boxSize="100px" mb={10} />
                        <h2 className="font-medium text-2xl text-[#333333] mb-1">Moruff Tirimisiyu A.</h2>
                        <p className="text-base text-[#333333CC] mb-1">abiodunmoruff@gmail.com</p>
                        <p className="text-xs text-[#333333CC] mb-10">Joined: 2 months ago</p>
                        <Button bg='#FF6767' color='#fff' variant='solid'
                            onClick={onOpen}
                        >
                            Logout
                        </Button>
                    </div>
                </div>
                <div className="w-9/12">
                    <div className="border border-[#33333333] rounded-[20px] flex items-center justify-between p-7 mb-5">
                        <div className="flex items-center gap-6">
                            {/* <Avatar src='https://bit.ly/sage-adebayo' boxSize="70px" /> */}
                            <Box className="relative">
                                <Avatar
                                    src="https://bit.ly/sage-adebayo"
                                    boxSize="70px"
                                    name="Moruff Tirimisiyu A."
                                />
                                {/* Uploading overlay */}
                                {isUploading && (
                                <Box
                                    position="absolute"
                                    inset="0"
                                    bg="blackAlpha.500"
                                    rounded="full"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Spinner color="white" />
                                </Box>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                />

                                {/* Edit button */}
                                <IconButton
                                    aria-label="Edit profile photo"
                                    icon={<FiEdit2 />}
                                    size="sm"
                                    rounded="full"
                                    bg="#DCF1FF"
                                    color="#20BBFF"
                                    position="absolute"
                                    bottom="0"
                                    right="0"
                                    boxShadow="md"
                                    _hover={{ bg: "blue.500" }}
                                    onClick={() => fileInputRef.current.click()}
                                />
                            </Box>
                            <div className="">
                                <h2 className="font-medium text-xl text-[#333333] mb-1">Moruff Tirimisiyu A.</h2>
                                <p className="text-base text-[#333333CC] mb-1">abiodunmoruff@gmail.com</p>
                            </div>
                        </div>
                        <Button bg='#EA1D78' color='#fff' variant='solid'>
                            Update Profile
                        </Button>
                    </div>
                    <div className="border border-[#33333333] rounded-[20px] flex items-center justify-between p-7 mb-5">
                        <div className="grid grid-cols-3 gap-4 w-full justify-between">
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">First Name</h3>
                                <p className="text-base text-[#333333]">Tirimisiyu</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">Gender</h3>
                                <p className="text-base text-[#333333]">Male</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">Phone Number</h3>
                                <p className="text-base text-[#333333]">+2348100441703</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">Last Name</h3>
                                <p className="text-base text-[#333333]">Maruff</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">Date of Birth</h3>
                                <p className="text-base text-[#333333]">May 12th, 1994</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">Email</h3>
                                <p className="text-base text-[#333333]">abiodunmoruff@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border border-[#33333333] rounded-[20px] flex items-center justify-between p-7">
                        <div className="grid grid-cols-3 gap-4 w-full justify-between">
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">Country</h3>
                                <p className="text-base text-[#333333]">Nigeria</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">State</h3>
                                <p className="text-base text-[#333333]">Oyo</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">City</h3>
                                <p className="text-base text-[#333333]">Ibadan</p>
                            </div>
                            <div className="font-medium">
                                <h3 className="text-xl text-[#33333380] mb-1">Address</h3>
                                <p className="text-base text-[#333333]">Ringroad Ibadan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LogoutConfirmModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirmLogout={handleLogout}
            />
        </div>
    )
}

export default ProfileInfo