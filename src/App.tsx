import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Stopwatch from "./components/Stopwatch";
import SessionLog from "./components/SessionLog";

function App() {
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
          <SessionLog />
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        <Stopwatch />
      </GridItem>
    </Grid>
  );
}

export default App;
