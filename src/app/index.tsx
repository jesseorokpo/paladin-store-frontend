import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import { observer } from "mobx-react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import MainAppRoutes from "./router/MainAppRoutes";
import { MaintineThemeConfig } from "../styles/mantine-config";

export default observer(function () {
  let [appState, setAppState] = React.useState("loaded");
  let checkAuthStatus;
  React.useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <MantineProvider
          theme={MaintineThemeConfig}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <MainAppRoutes />
          </NotificationsProvider>
        </MantineProvider>
      </BrowserRouter>
    </React.Fragment>
  );
});
