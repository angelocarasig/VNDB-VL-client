import React from 'react';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function LightDarkSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <LightModeIcon size={18} /> : <DarkModeIcon size={18} />}
    </ActionIcon>
  );
}

export default LightDarkSwitch;