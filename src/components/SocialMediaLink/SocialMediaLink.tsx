// SocialMediaLink.tsx
import React from "react";
import { SocialMediaIcon } from "./SocialMediaLinkStyles";

interface SocialMediaLinkProps {
  icon: React.ReactNode;
  href: string;
  size?: string;
}

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  icon,
  href,
  size = "40px",
}) => {
  return (
    <SocialMediaIcon href={href} size={size}>
      {icon}
    </SocialMediaIcon>
  );
};
