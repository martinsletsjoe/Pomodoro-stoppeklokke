import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const SessionLog = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Pomodoro sessions completed</TableCaption>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Started</Th>
            <Th isNumeric>Done</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>12.03.2024</Td>
            <Td>09:24:27</Td>
            <Td isNumeric>09:24:32</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Date</Th>
            <Th>Started</Th>
            <Th isNumeric>Done</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default SessionLog;
