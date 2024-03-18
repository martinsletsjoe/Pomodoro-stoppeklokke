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
import moment from "moment";
import React from "react";

interface DisplayInfoProps {
  timerInfos: TimerInfo[]; // Note the plural 'timerInfos' indicating an array of TimerInfo objects
}

const SessionLog: React.FC<DisplayInfoProps> = ({ timerInfos }) => {
  // let logTimes = []String;

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
          {timerInfos.map((timerInfo, index) => (
            <Tr key={index}>
              <Td>{moment(timerInfo.startTime)?.format(`Do MMMM YYYY`)}</Td>
              {/* <Td>{timerInfo.startTime?.toString()}</Td> */}
              <Td>{moment(timerInfo.startTime)?.format(`HH:mm:ss`)}</Td>
              <Td isNumeric>{moment(timerInfo.endTime)?.format(`HH:mm:ss`)}</Td>
            </Tr>
          ))}
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
