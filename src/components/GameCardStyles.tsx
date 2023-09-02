import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GamingCardStyles = ({ children }: Props) => {
  return (
    <Box overflow="hidden" width="235px" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GamingCardStyles;
