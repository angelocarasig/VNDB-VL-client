import React from "react";

import { ActionIcon, useMantineColorScheme, Group, SegmentedControl, Center, Box } from "@mantine/core";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function LightDarkSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  // return (
  //   <ActionIcon
  //     variant="outline"
  //     color={dark ? 'yellow' : 'blue'}
  //     onClick={() => toggleColorScheme()}
  //     title="Toggle color scheme"
  //   >
  //     {dark ? <LightModeIcon size={18} /> : <DarkModeIcon size={18} />}
  //   </ActionIcon>
  // );

  return (
    <Group position="center" my="xl">
      <SegmentedControl
        value={colorScheme}
        onChange={toggleColorScheme}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <LightModeIcon size={16} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <DarkModeIcon size={16} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}

export default LightDarkSwitch;
