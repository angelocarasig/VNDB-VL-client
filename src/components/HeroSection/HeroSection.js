import React from "react";
import NovelIDInput from "./NovelIDInput";
import banner from "./Banner Images/banner.png";

//Mantine
import { Container, Center, Text, Divider, Space } from "@mantine/core";

const HeroSectionStyles = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${banner})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  objectFit: "contain",
  boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.3)",
};

const ContainerStyles = {
  border: "5px solid white",
  borderRadius: "15px",
  backdropFilter: "blur(5px)",
  boxShadow: "3px 3px rgba(0,0,0,0.2)",
  boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.3)"
};

const HeroSection = () => {
  return (
    <div className="HeroSectionContainer" style={HeroSectionStyles}>
    <div className="HeroSectionContentShadow" style={{boxShadow: "3px 3px rgba(0,0,0,0.2)", borderRadius: "15px",}}>

        <Container className="HeroSectionContent" style={ContainerStyles}>
            <Center>
              <Text sx={{ color: "white", fontSize: "100px" }}>
                {" "}
                VNDB-Visualizer{" "}
              </Text>
            </Center>

            <Divider color="rgba(255,255,255,0.2)" />

            <Center>
              <Text sx={{ color: "white", fontSize: "50px" }}>
                Enter your ID to get started!{" "}
              </Text>
            </Center>

            <Center>
              {/* The TextField and Button */}
              <NovelIDInput />
            </Center>

            <Space h="md" />
        </Container>

    </div>
    </div>
  );
};

export default HeroSection;
