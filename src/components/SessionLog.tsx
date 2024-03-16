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
import { TimerInfo } from "../types";

interface DisplayInfoProps {
  timerInfo: TimerInfo;
}

const SessionLog = ({ timerInfo }: { timerInfo: TimerInfo }) => {
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
            <Td>12.12.2021</Td>
            <Td>{timerInfo.startTime?.toString()}</Td>
            <Td isNumeric>{timerInfo.endTime?.toString()}</Td>
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
