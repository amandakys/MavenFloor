import { ThemeContext } from "@emotion/react";
import { Box, Button, ButtonProps, styled } from "@mui/material";

const LeftButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#87B0FF",
  justifyContent: "end",
  paddingRight: 0,
  color: "black",
  height: "60px",
  width: "70px",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "#87B0FF"
  }
}));

const RightButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: "#FFCB7F",
  justifyContent: "start",
  paddingLeft: 0,
  color: "black",
  height: "60px",
  width: "70px",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "#FFCB7F"
  }
}));

export const StrikeButton = (props: { value: number }) => {
  return (
    <Box display="flex">
      <LeftButton disableElevation disableFocusRipple variant="contained">
        {props.value.toString().substring(0, 2)}
      </LeftButton>
      <RightButton disableElevation disableFocusRipple variant="contained">
        {props.value.toString().substring(2)}
      </RightButton>
    </Box>
  );
};
