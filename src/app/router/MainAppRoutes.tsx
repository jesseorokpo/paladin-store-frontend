import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainHeader from "@ui/organisms/main-header/MainHeader";
import MainAppNavigation from "@ui/organisms/main-navigation/MainNavigation";
import { DashboardScreen } from "@ui/pages/dashboard";
import MainAppShell from "@ui/template/MainAppShell";
import React from "react";
import { Add } from "iconsax-react";
import AdsScreen from "@ui/pages/ads";
import InvoicesScreen from "@ui/pages/invoices";
import ProductsScreen from "@ui/pages/products";
import StoresScreen from "@ui/pages/store";

export default function MainAppRoutes() {
  return (
    <MainAppShell Navbar={MainAppNavigation} ShellHeader={MainHeader}>
      <Routes>
        <Route path="/">
          <Route path="" element={<DashboardScreen />} />
          <Route path="about" element={<DashboardScreen />} />
          <Route path="contact" element={<DashboardScreen />} />
          <Route path="signin" element={<DashboardScreen />} />
          <Route path="signup" element={<DashboardScreen />} />
        </Route>
        <Route path="/brand">
          <Route path=":brand" element={<DashboardScreen />} />
        </Route>
        <Route path="/store">
          <Route path=":store" element={<DashboardScreen />} />
        </Route>

        <Route path="/account">
          <Route path="stores">
            <Route path=":product" element={<StoresScreen />} />
            <Route path="" element={<StoresScreen />} />
          </Route>
          <Route path="products">
            <Route path=":product" element={<ProductsScreen />} />
            <Route path="" element={<ProductsScreen />} />
          </Route>
          <Route path="ads">
            <Route path=":ad" element={<AdsScreen />} />
            <Route path="" element={<AdsScreen />} />
          </Route>
          <Route path="invoices">
            <Route path=":invoice" element={<InvoicesScreen />} />
            <Route path="" element={<InvoicesScreen />} />
          </Route>ProductsScreen
          <Route path="" element={<DashboardScreen />} />
        </Route>
      </Routes>
    </MainAppShell>
  );
};
