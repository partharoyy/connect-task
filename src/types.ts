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
