"use client";

import { Icon as Iconify } from "@iconify-icon/react";
import { ComponentProps, memo } from "react";

interface IconProps extends ComponentProps<typeof Iconify> {}

const Icon = ({ ...props }: IconProps) => {
  return <Iconify {...props} />;
};

export default memo(Icon);
