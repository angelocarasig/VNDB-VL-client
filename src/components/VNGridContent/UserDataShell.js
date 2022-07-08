import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";


import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  ScrollArea,
} from "@mantine/core";

import VNData from "./VNData";

import LightDarkSwitch from "../LightDarkSwitch";
import bernIcon from "./icon.jpg";

const leftItems = {
  display: "flex",
  width: "350px",
  cursor: "pointer",
};

const iconStyle = {
  backgroundImage: "url(" + bernIcon + ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "45px",
  width: "45px",
  transform: "translate(25%, 0%)",
  display: "absolute",
};

const navbarDirectories = [
  {label: "Categories",
    links: [
      {label: "Test1"},
      {label: "Test2"},
      {label: "Test3"},
    ]
},
  {label: "Filters"   }
];

const UserDataShell = (UserData) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const titleSize = useMediaQuery("(min-width: 900px)");

  const location = useLocation();
  const navigateTo = useNavigate();

  return (
    <AppShell
      key={location.pathname}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          transition: "padding-left 1000ms ease",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[0]}
                mr="xl"
              />
            </MediaQuery>
            <div
              className="leftItems"
              style={leftItems}
              onClick={() => {
                navigateTo("/");
              }}
            >
              {titleSize
                ? [
                    <Title order={2}>VNDB-Visualizer</Title>,
                    <i style={iconStyle} />,
                  ]
                : [<Title order={2}>VNDB-VL</Title>]}
            </div>

            <div
              className="rightItems"
              style={{
                width: "100%",
                right: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <LightDarkSwitch />
            </div>
          </div>
        </Header>
      }
    >
    <VNData UserData={UserData} />
    </AppShell>
  );
};

export default UserDataShell;
