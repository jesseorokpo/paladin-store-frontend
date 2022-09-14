import { IconBuildingStore, IconDashboard, IconFileInvoice, IconFiles, IconGauge, IconPackage, IconTags, } from "@tabler/icons";
import { LinksGroupProps } from "./NavigationLinks";
import {
    Card as SaxCard, TransactionMinus as SaxTransaction, Setting as SaxSetting, People as SaxPeople, ProfileTick as SaxProfileTick,
    MoneyTime as SaxMoneyTime, Setting3 as SaxSettings3, CpuSetting as SaxCpuSettings, MusicDashboard, Grid1, Grid2, Grid3, Grid4, Grid5, Grid8, LayoutMaximize, Element4
} from "iconsax-react"

export const navigationLinks: LinksGroupProps[] = [
    { label: 'Overview', icon: IconDashboard, link: "/account", },
    { label: 'Collections', icon: IconFiles, link: "/account/collections", },
    { label: 'Products', icon: IconTags, link: "/account/products", },
    { label: 'My Ads', icon: IconPackage, link: "/account/ads", },
    { label: 'My Stores', icon: IconBuildingStore, link: "/account/stores", },
    { label: 'Invoices', icon: IconFileInvoice, link: "/account/invoices", }
];