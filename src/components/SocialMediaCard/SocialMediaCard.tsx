import { CardContent, List, ListItem } from "@mui/material";

import { SocialMediaLinks } from "../SocialMediaLinks";
import { SocialMediaType } from "../../types";
import { StyledSocialCard } from "./SocialMediaCardStyles";

type SocialMediaCardProps = {
  items: SocialMediaType[];
};

export const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ items }) => {
  return (
    <StyledSocialCard>
      <CardContent>
        <List>
          {items.map((item) => (
            <ListItem key={item.name}>
              <SocialMediaLinks {...item} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </StyledSocialCard>
  );
};
