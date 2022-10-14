import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DashboardScreen } from "@ui/pages/dashboard";
import AdsScreen from "@ui/pages/manage-brand/ads";
import InvoicesScreen from "@ui/pages/manage-brand/invoices";
import ProductsScreen from "@ui/pages/entity-products/ManageProductsScreen";
import StoresScreen from "@ui/pages/store";
import { LoginScreen } from "@ui/pages/authentication/LoginScreen";
import CollectionsScreen from "@ui/pages/entity-collections/ManageCollectionsScreen";
import { BrandRegisterationScreen } from "@ui/pages/registerations/BrandRegisterationScreen";
import { StoreRegisterationScreen } from "@ui/pages/registerations/StoreRegisterationScreen";
import { PlatformNavigationShell } from "@ui/template/PlatformNavigationShell";
import { AccountNavigationShell } from "@ui/template/AccountNavigationShell";
import { RegisterationScreen } from "@ui/pages/authentication/RegisterationScreen";
import { ShopHomeScreen } from "@ui/pages/market/shop-home/ShopHomeScreen";
import PlatformHomeScreen from "@ui/pages/market/PlatformHome";
import { MarketHomeScreen } from "@ui/pages/market/market-home/MarketHomeScreen";
import { ViewShopProductScreen } from "@ui/pages/market/shop-home/ViewShopProduct";

export default function MainAppRoutes() {
  return (
    <Routes>
      <Route path="account" element={<AccountNavigationShell />}>
        <Route path="stores">
          <Route path="" element={<StoresScreen />} />
        </Route>
        <Route path="collections">
          <Route path="" element={<CollectionsScreen />} />
        </Route>
        <Route path="products">
          <Route path=":product" element={<ProductsScreen />} />
          <Route path="" element={<ProductsScreen />} />
        </Route>
        <Route path="ads">
          <Route path="" element={<AdsScreen />} />
        </Route>
        <Route path="invoices">
          <Route path="" element={<InvoicesScreen />} />
        </Route>
        <Route path="" element={<DashboardScreen />} />
      </Route>

      <Route path="/" element={<PlatformNavigationShell />}>
        <Route path="about" element={<div></div>} />
        <Route path="contact" element={<div></div>} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="register" element={<RegisterationScreen />} />
        <Route path="new-store" element={<StoreRegisterationScreen />} />
        <Route path="new-brand" element={<BrandRegisterationScreen />} />
        <Route path="brand">
          <Route path=":brand" element={<div></div>} />
        </Route>
        <Route path="store">
          <Route path=":store" element={<ShopHomeScreen />} />
          <Route
            path=":store/products/:product"
            element={<ViewShopProductScreen />}
          />
        </Route>
        <Route path="market">
          <Route path=":id" element={<MarketHomeScreen />} />
        </Route>
        <Route path="" element={<PlatformHomeScreen />} />
      </Route>
    </Routes>
  );
}
