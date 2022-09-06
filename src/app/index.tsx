import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import { observer } from "mobx-react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import AuthRoutes from "./router/AuthRoutes";
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
            {appState == "loaded" ?
              checkAuthStatus ? <React.Fragment>
                <AuthRoutes />
              </React.Fragment> : <React.Fragment>
                <MainAppRoutes />
              </React.Fragment> : <React.Fragment>
                <div>Initializing</div>
              </React.Fragment>
            }
          </NotificationsProvider>
        </MantineProvider>
      </BrowserRouter>
    </React.Fragment>
  );
});
