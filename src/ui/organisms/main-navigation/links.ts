import {
  IconBuildingStore,
  IconDashboard,
  IconFileInvoice,
  IconFiles,
  IconGauge,
  IconPackage,
  IconTags,
} from "@tabler/icons";
import { LinksGroupProps } from "./NavigationLinks";


export const navigationLinks: LinksGroupProps[] = [
  { label: "Overview", icon: IconDashboard, link: "/account" },
  { label: "Collections", icon: IconFiles, link: "/account/collections" },
  { label: "Products", icon: IconTags, link: "/account/products" },
  { label: "My Ads", icon: IconPackage, link: "/account/ads" },
  { label: "My Stores", icon: IconBuildingStore, link: "/account/stores" },
  { label: "Invoices", icon: IconFileInvoice, link: "/account/invoices" },
];
