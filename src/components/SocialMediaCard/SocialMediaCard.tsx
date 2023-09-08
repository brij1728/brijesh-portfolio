import { CardContent, ListItem } from "@mui/material";
import { StyledSocialCard, StyledSocialList } from "./SocialMediaCardStyles";

import { SocialMediaLinks } from "../SocialMediaLinks";
import { SocialMediaType } from "../../types";

type SocialMediaCardProps = {
  items: SocialMediaType[];
};

export const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ items }) => {
  return (
    <StyledSocialCard>
      <CardContent>
        <StyledSocialList>
          {items.map((item) => (
            <ListItem key={item.name}>
              <SocialMediaLinks {...item} />
            </ListItem>
          ))}
        </StyledSocialList>
      </CardContent>
    </StyledSocialCard>
  );
};
