import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
    Select,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import EmptyState from "./EmptyState";

const hmoData = [
    {
        id: "AXA021",
        title: "Axamansard Bronze",
        status: "Active",
        amount: 86500,
        date: "24 Jan, 2025",
    },
    {
        id: "AXA024",
        title: "Axamansard Silver",
        status: "Active",
        amount: 127725,
        date: "24 Jan, 2025",
    },
    {
        id: "AXA024",
        title: "Axamansard Silver",
        status: "Active",
        amount: 127725,
        date: "24 Jan, 2025",
    },
    {
        id: "AXA024",
        title: "Axamansard Silver",
        status: "Expired",
        amount: 127725,
        date: "24 Jan, 2025",
    },
    {
        id: "AXA024",
        title: "Axamansard Silver",
        status: "Active",
        amount: 127725,
        date: "24 Jan, 2025",
    },
    {
        id: "AXA024",
        title: "Axamansard Silver",
        status: "Active",
        amount: 127725,
        date: "24 Jan, 2025",
    },
];


const HMOHistoryTable = ({ data = hmoData ?? [] }) => {
    return (
        <div className="w-full py-4 bg-white min-h-screen">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h2 className="text-xl md:text-3xl font-bold text-[#333333]">HMO History</h2>

                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full md:w-auto">

                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <Input
                            placeholder="Search hmo plan, product Id, status...."
                            pl="40px"
                            bg="#F4F4F580"
                            borderRadius="12px"
                            height="48px"
                            _focus={{ boxShadow: "none" }}
                        />
                        <SearchIcon
                            position="absolute"
                            left="12px"
                            top="50%"
                            transform="translateY(-50%)"
                            color="gray.400"
                        />
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 text-sm">Sort by:</span>
                        <Select
                            w="120px"
                            bg="white"
                            borderRadius="12px"
                            height="48px"
                            _focus={{ boxShadow: "none" }}
                        >
                            <option>All</option>
                            <option>Recent</option>
                            <option>Oldest</option>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg overflow-hidden">
                <TableContainer>
                    <Table variant="simple">
                        <Thead bg="#FFF">
                            <Tr>
                                <Th color='#333333' fontSize='20px' border='1px solid #6DD1FF66'>Product ID</Th>
                                <Th color='#333333' fontSize='20px' border='1px solid #6DD1FF66'>HMO Title</Th>
                                <Th color='#333333' fontSize='20px' border='1px solid #6DD1FF66'>Plan status</Th>
                                <Th color='#333333' fontSize='20px' border='1px solid #6DD1FF66'>Amount</Th>
                                <Th color='#333333' fontSize='20px' border='1px solid #6DD1FF66'>Date</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <Tr key={index} color='#333333' fontSize='20px'>
                                        <Td border='1px solid #6DD1FF66' py="10px">{item.id}</Td>
                                        <Td border='1px solid #6DD1FF66' py="10px">{item.title}</Td>
                                        <Td border='1px solid #6DD1FF66' textAlign="center" py="10px">
                                            <span
                                            className={`px-3 py-1 rounded-lg text-sm font-medium
                                                ${
                                                item.status === "Active"
                                                    ? "bg-[#45CD23] text-white"
                                                    : item.status === "Expired"
                                                    ? "bg-red-500 text-white"
                                                    : "bg-gray-200 text-gray-700"
                                                }`}
                                            >
                                            {item.status}
                                            </span>
                                        </Td>
                                        <Td border='1px solid #6DD1FF66' py="10px">₦{item.amount.toLocaleString()}</Td>
                                        <Td border='1px solid #6DD1FF66' py="10px">{item.date}</Td>
                                    </Tr>
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan={5} p={0}>
                                        {/* Empty State */}
                                        <EmptyState />
                                    </Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default HMOHistoryTable;
