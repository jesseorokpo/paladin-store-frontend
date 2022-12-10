import {} from "@tabler/icons";
import {
  Heart,
  LockCircle,
  Notification,
  InfoCircle,
  Information,
  User,
  ArchiveBook,
  Activity,
} from "iconsax-react";
import { LinksGroupProps } from "./NavigationLinks";

export const navigationLinks: LinksGroupProps[] = [
  { label: "Overview", icon: Activity, link: "/account" },
  { label: "Order History", icon: ArchiveBook, link: "/account/history" },
  { label: "Lockers", icon: LockCircle, link: "/account/lockers" },
  {
    label: "Profile",
    icon: User,
    link: "/account/profile",
  },
];
