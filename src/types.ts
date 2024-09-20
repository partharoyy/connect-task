import { IconType } from "react-icons";
import { ReactNode } from "react";

export type ActiveComponent = "home" | "bag" | "chat" | "help" | "setting";

export interface IconWithBackgroundProps {
  Icon: IconType;
  bgColor: string;
  size?: number;
  notificationCount?: number;
  iconColor?: string;
}

export interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface SectionData {
  title: string;
  cards: {
    id: string;
    name: string;
    avatarUrl: string;
    tags: string[];
    status: string;
    statusType: "escalated" | "pending" | "open" | "resolved";
    title?: string;
    description?: string;
  }[];
}
