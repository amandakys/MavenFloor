import { Box, Button, ButtonProps, styled } from "@mui/material";
import { StrikeInputType, STRIKE_TYPE } from "../App";

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

export const StrikeButton = (props: {
  value: number;
  centerStrike: number;
  onStrikeClick: (strike: StrikeInputType) => void;
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginBottom="4px"
      sx={
        props.value === props.centerStrike ? { border: "2px solid green" } : {}
      }
    >
      <LeftButton
        disableElevation
        disableFocusRipple
        variant="contained"
        onClick={() =>
          props.onStrikeClick({ strike: props.value, type: STRIKE_TYPE.P })
        }
      >
        {props.value.toString().substring(0, 2)}
      </LeftButton>
      <RightButton
        disableElevation
        disableFocusRipple
        variant="contained"
        onClick={() =>
          props.onStrikeClick({ strike: props.value, type: STRIKE_TYPE.C })
        }
      >
        {props.value.toString().substring(2)}
      </RightButton>
    </Box>
  );
};
