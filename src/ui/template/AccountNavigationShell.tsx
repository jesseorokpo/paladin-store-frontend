import { Center, Stack, Box, Text } from "@mantine/core";
import MarketplaceHeader from "@ui/organisms/marketplace-widgets/MarketplaceHeader";
import { SomethingWentWrongWidget } from "@ui/organisms/utils/SomethingWentWrongWidget";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainAppShell from "@ui/template/MainAppShell";
import MainAppNavigation from "@ui/organisms/main-navigation/MainNavigation";
import MainHeader from "@ui/organisms/main-header/MainHeader";
import { authManager } from "@store/account/auth";
import { orderManager } from "@store/utils/order";
import { lockerManager } from "@store/utils/locker";
import { observer } from "mobx-react-lite";

export class AccountNavigationShell extends React.Component<
  {},
  { error: null | undefined | boolean | any; errorInfo: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: "" };
  }
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  componentDidMount() {
    authManager.init();
    orderManager.load();
    lockerManager.load();
  }

  render() {
    return (
      <MainAppShell ShellHeader={MainHeader} Navbar={MainAppNavigation}>
        {this.state.error ? <SomethingWentWrongWidget /> : <AccountRoot />}
      </MainAppShell>
    );
  }
}

const AccountRoot = observer(() => {
  if (authManager.status == "INITIAL") {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
});
