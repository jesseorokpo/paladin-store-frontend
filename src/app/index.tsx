import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import MainAppRoutes from "./router/MainAppRoutes";
import { MaintineThemeConfig } from "../styles/mantine-config";
import { useUtilsLoader } from "../hooks/loader";
import axios from "axios";

export default observer(function () {
  let [appState, setAppState] = React.useState("loaded");
  let checkAuthStatus;

  // useUtilsLoader();

  // React.useEffect(() => {
  //   fetch("http://134.209.70.120:8081/api/v1/marketapi/category", {
  //     // body: JSON.stringify({
  //     //   email: "joshuanwafor01@gmail.com",
  //     //   password: "15June1990..",
  //     //   rememberMe: true,
  //     //   platform: "BRAND_SELLER",
  //     // }),
  //     // headers: { "Access-Control-Allowed-Origin": "*" },
  //     // method: "POST",
  //   })
  //     .then((res) => {
  //       console.log("res");
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log("err");
  //       console.log(err);
  //     });
  // }, []);

  // return <div>I AM WORKING</div>;

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
