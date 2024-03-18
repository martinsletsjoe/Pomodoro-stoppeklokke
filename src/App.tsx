import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Stopwatch from "./components/Stopwatch";
import SessionLog from "./components/SessionLog";
import { useState } from "react";
import { TimerInfo } from "./types";

function App() {
  const [timerInfos, setTimerInfos] = useState<TimerInfo[]>([]);

  const addTimerInfo = (newTimerInfo: TimerInfo) => {
    setTimerInfos((prevTimerInfos) => [...prevTimerInfos, newTimerInfo]);
    console.log("here:", newTimerInfo);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav " " main " `,
        lg: `"nav nav" "aside main " `, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "500px 1fr",
      }}
    >
      <GridItem area="nav" bg="#081b29">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="green">
          <SessionLog timerInfos={timerInfos} />
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <Stopwatch addTimerInfo={addTimerInfo} />
      </GridItem>
    </Grid>
  );
}

export default App;
