import { useState } from 'react';
import {
  AppShell,
  useMantineTheme,
} from '@mantine/core';

type MainAppShellProps = {
  children: any;
  Navbar: React.FC<{ setOpened: (data: any) => void, opened: boolean }>;
  ShellHeader: React.FC<{ setOpened: (data: any) => void, opened: boolean }>;
}

export const MainAppShell: React.FC<MainAppShellProps> = ({ children, Navbar,ShellHeader}) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.darkBlue[5] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar setOpened={setOpened} opened={opened} />
      }
      header={
        <ShellHeader opened={opened} setOpened={setOpened}/>
      }
    >
      {children}
    </AppShell>
  );
}


export default MainAppShell 