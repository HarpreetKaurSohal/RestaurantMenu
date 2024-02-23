import * as m from "@mui/material";
import { aboutUsScript } from "./aboutUsScript";
import ImageSlider from "./ImageSlider";
import { PageSubtitle } from "../../GlobalFileContainer";

const AboutUs = () => {
  const description: Record<string, string> = aboutUsScript.description;

  return (
    <m.Box sx={{ display: "flex", flexDirection: "column" }}>
      <PageSubtitle title={aboutUsScript.heading} />
      <m.Typography variant="caption" fontWeight={"bold"}>
        {aboutUsScript.subtitle1}
      </m.Typography>
      <ImageSlider />
      {Object.keys(description)?.map((para) => (
        <m.Typography key={`${para}`} variant="caption">
          {description[para]}
        </m.Typography>
      ))}
    </m.Box>
  );
};

export default AboutUs;
