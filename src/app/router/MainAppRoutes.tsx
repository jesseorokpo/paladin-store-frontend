import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainHeader from "@ui/organisms/main-header/MainHeader";
import MainAppNavigation from "@ui/organisms/main-navigation/MainNavigation";
import { DashboardScreen } from "@ui/pages/dashboard";
import MainAppShell from "@ui/template/MainAppShell";
import AdsScreen from "@ui/pages/ads";
import InvoicesScreen from "@ui/pages/invoices";
import ProductsScreen from "@ui/pages/products";
import StoresScreen from "@ui/pages/store";
import MarketplaceShell from "@ui/template/MarketplaceShell";
import MarketplaceHeader from "@ui/organisms/marketplace-widgets/MarketplaceHeader";
import MarketHomeScreen from "@ui/pages/market/MarketHome";
import { LoginScreen } from "@ui/pages/authentication/login";
import { RegisterScreen } from "@ui/pages/authentication/register";
import { StoreRegisterationScreen } from "@ui/pages/authentication/SellerRegisteration";
import CollectionsScreen from "@ui/pages/collections";

export default function MainAppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="about" element={<RenderMarketplaceScreen><div>About</div></RenderMarketplaceScreen>} />
        <Route path="contact" element={<RenderMarketplaceScreen><div>Contact</div></RenderMarketplaceScreen>} />
        <Route path="signin" element={<RenderMarketplaceScreen><LoginScreen /></RenderMarketplaceScreen>} />
        <Route path="signup" element={<RenderMarketplaceScreen><RegisterScreen /></RenderMarketplaceScreen>} />
        <Route path="/store-registeration" element={<RenderMarketplaceScreen><StoreRegisterationScreen /></RenderMarketplaceScreen>} />
        <Route path="/brand">
          <Route path=":brand" element={<RenderMarketplaceScreen><div>Brand</div></RenderMarketplaceScreen>} />
        </Route>
        <Route path="/store">
          <Route path=":store" element={<RenderMarketplaceScreen><DashboardScreen /></RenderMarketplaceScreen>} />
        </Route>
        <Route path="" element={<RenderMarketplaceScreen><MarketHomeScreen /></RenderMarketplaceScreen>} />
      </Route>

      <Route path="/account">
        <Route path="stores">
          <Route path=":product" element={<RenderAppScreen><StoresScreen /></RenderAppScreen>} />
          <Route path="" element={<RenderAppScreen><StoresScreen /></RenderAppScreen>} />
        </Route>
        <Route path="collections">
          <Route path="" element={<RenderAppScreen><CollectionsScreen /></RenderAppScreen>} />
        </Route>
        <Route path="products">
          <Route path=":product" element={<RenderAppScreen><ProductsScreen /></RenderAppScreen>} />
          <Route path="" element={<RenderAppScreen><ProductsScreen /></RenderAppScreen>} />
        </Route>
        <Route path="ads">
          <Route path=":ad" element={<RenderAppScreen><AdsScreen /></RenderAppScreen>} />
          <Route path="" element={<RenderAppScreen><AdsScreen /></RenderAppScreen>} />
        </Route>
        <Route path="invoices">
          <Route path=":invoice" element={<InvoicesScreen />} />
          <Route path="" element={<RenderAppScreen><InvoicesScreen /></RenderAppScreen>} />
        </Route>
        <Route path="" element={<RenderAppScreen><DashboardScreen /></RenderAppScreen>} />
      </Route>
    </Routes>

  );
};



function RenderMarketplaceScreen({ children }: any) {
  return <MarketplaceShell ShellHeader={MarketplaceHeader}>
    {children}
  </MarketplaceShell>
}

function RenderAppScreen({ children }: any) {
  return <MainAppShell ShellHeader={MainHeader} Navbar={MainAppNavigation}>
    {children}
  </MainAppShell>
}