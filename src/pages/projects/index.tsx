import { Image, Stack } from "@chakra-ui/react";
import Spinner from "_components/Spinner";
import ProjectCard from "./Card";

import hiresideImage from "_assets/hireside.png";
import drawImage from "_assets/draw2p.png";

function About() {
  return (
    <Stack>
      <ProjectCard
        preview={drawImage}
        title="Draw2P"
        description="Peer to peer Google Drawings. Communicates via WebRTC, drawing done with canvas."
        tech={["React", "Ant Design", "Vite"]}
        link="https://chang-ch.github.io/draw2p/"
        source="https://github.com/Chang-CH/draw2p"
      />
      <ProjectCard
        preview={hiresideImage}
        title="Hireside"
        description="Renovation work price estimator. Shortlisted for NUS Venture Initiation Programme 2021."
        tech={["React", "NextJS", "DynamoDB", "AWS"]}
        link="https://www.hireside.co"
      />
    </Stack>
  );
}

export default About;
