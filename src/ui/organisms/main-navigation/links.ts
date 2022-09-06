import { IconGauge, } from "@tabler/icons";
import { LinksGroupProps } from "./NavigationLinks";
import {
    Card as SaxCard, TransactionMinus as SaxTransaction, Setting as SaxSetting, People as SaxPeople, ProfileTick as SaxProfileTick,
    MoneyTime as SaxMoneyTime, Setting3 as SaxSettings3, CpuSetting as SaxCpuSettings, MusicDashboard, Grid1, Grid2, Grid3, Grid4, Grid5, Grid8, LayoutMaximize, Element4
} from "iconsax-react"

export const navigationLinks: LinksGroupProps[] = [
    { label: 'Overview', icon: Element4, link: "/account", },
    { label: 'Products', icon: SaxTransaction, link: "/account/products", },
    { label: 'My Ads', icon: SaxTransaction, link: "/account/ads", },
    { label: 'My Stores', icon: SaxTransaction, link: "/account/stores", },
    { label: 'Invoices', icon: SaxTransaction, link: "/account/invoices", }
];