import * as m from "@mui/material";
import { AboutUs, PageHeader } from "../../GlobalFileContainer";

const Home = () => {
  return (
    <m.Box>
      <PageHeader title="Home" />
      <AboutUs />
    </m.Box>
  );
};

export default Home;
