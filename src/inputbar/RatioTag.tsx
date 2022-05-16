import { Box } from "@mui/material";
import { StrikeInputType, STRIKE_TYPE } from "../App";

export const RatioTag = (props: { strike: StrikeInputType }) => {
  return (
    <Box
      sx={{
        backgroundColor:
          props.strike.type === STRIKE_TYPE.P ? "#87B0FF" : "#FFCB7F",
        height: "45px",
        width: "65px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        margin: "2px"
        // marginBottom: '4px',
      }}
    >
      {props.strike.strike}
    </Box>
  );
};
