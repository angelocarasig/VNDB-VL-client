import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

import {
  Select,
  Switch,
  useMantineTheme,
  Space,
  ActionIcon,
  Center,
} from "@mantine/core";

import { Grid } from "@mui/material";

import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import VNCards from "./VNCards";

const gridItemHover = {
  whileHover: {
    scale: 1.05,
    zIndex: 5,
  },
};

const VNData = ({ UserData }) => {
  console.log(UserData.UserData);

  const [userNovels, setUserNovels] = useState([]);
  const [sortType, setSortType] = useState("");
  const [order, setOrder] = useState("ASC");

  const [explicitImage, setExplicitImage] = useState(false);

  console.log("Explicit Content? " + explicitImage);

  const handleExplicit = (event) => {
    if (explicitImage === false) {
      console.log("Enabling");
      setExplicitImage(true);
    } else {
      console.log("Disabling");
      setExplicitImage(false);
    }
  };

  useEffect(() => {
    setUserNovels(UserData.UserData);
  }, [UserData.UserData]);

  // =========================================
  // SORTING FUNCTIONS
  // =========================================

  const sorting = (event) => {
    let property = "";
    try {
      property = event.target.value;
    } catch {
      property = event;
    }

    setSortType(property);
    if (order === "ASC") {
      console.log("Entered: ASC");
      const sorted = [...userNovels].sort((a, b) =>
        a[property] > b[property] ? 1 : -1
      );

      setUserNovels(sorted);
      setOrder("DESC");
    }

    if (order === "DESC") {
      console.log("Entered: DESC");
      const sorted = [...userNovels].sort((a, b) =>
        a[property] < b[property] ? 1 : -1
      );
      setUserNovels(sorted);
      setOrder("ASC");
    }
  };

  const buttonType = () => {
    if (order === "ASC") {
      return <KeyboardArrowUpRoundedIcon />;
    }
    return <KeyboardArrowDownRoundedIcon />;
  };

  // =========================================
  // SORTING FUNCTIONS
  // =========================================

  // /////////////////////////////////////////

  // =========================================
  // THEMES
  // =========================================

  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  // =========================================
  // THEMES
  // =========================================

  return (
    <>
      <div
        className="Sorting"
        style={{
          width: "100%",
          right: 0,
          display: "flex",
          justifyContent: "flex-end",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", left: "0", bottom: "0"}}>
          <Switch
            label="R-18 Mode"
            size="md"
            color="dark"
            checked={explicitImage}
            onChange={handleExplicit}
          />
        </div>

        <Space w="md" />

        <Select
          label="Sort By"
          value={sortType}
          onChange={sorting}
          placeholder="Visual Novel ID"
          data={[
            { value: "vn_id", label: "Visual Novel ID" },
            { value: "title", label: "Title" },
            { value: "rating", label: "Rating" },
            { value: "vote", label: "Vote" },
          ]}
        />

        <Center style={{ marginLeft: "5px" }}>
          <ActionIcon
            variant="outline"
            color="gray"
            onClick={() => {
              sorting(sortType);
            }}
            style={{ marginTop: "auto", padding: "16px" }}
          >
            {buttonType()}
          </ActionIcon>
        </Center>
      </div>

      <Space h="md" />

      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {userNovels &&
          userNovels.map((vn, pos) => {
            return (
              <Grid
                item
                key={pos}
                component={motion.div}
                {...gridItemHover}
                style={{ cursor: "pointer" }}
              >
                <VNCards
                  userNovels={vn}
                  color={secondaryColor}
                  explicitImage={explicitImage}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default VNData;
