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

const PaymentHistoryTable = ({ data = [] }) => {
    return (
        <div className="w-full py-4 bg-white min-h-screen">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h2 className="text-3xl font-bold text-[#004475]">History</h2>

                <div className="flex gap-4 items-center w-full md:w-auto">

                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <Input
                            placeholder="Search hmo plan, product Id, status...."
                            pl="40px"
                            bg="white"
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
                                <Th color='#333333' border='1px solid #6DD1FF66'>Transaction ID</Th>
                                <Th color='#333333' border='1px solid #6DD1FF66'>Transaction Title</Th>
                                <Th color='#333333' border='1px solid #6DD1FF66'>Plan status</Th>
                                <Th color='#333333' border='1px solid #6DD1FF66'>Amount</Th>
                                <Th color='#333333' border='1px solid #6DD1FF66'>Date</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <Tr key={index}>
                                        <Td>{item.id}</Td>
                                        <Td>{item.title}</Td>
                                        <Td>{item.status}</Td>
                                        <Td>{item.amount}</Td>
                                        <Td>{item.date}</Td>
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

export default PaymentHistoryTable;
