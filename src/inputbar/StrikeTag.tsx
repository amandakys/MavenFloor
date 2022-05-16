import { Box } from "@mui/material";
import { StrikeInputType, STRIKE_TYPE } from "../App";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const StrikeTag = (props: { strike: StrikeInputType }) => {
  return (
    <Box sx={{ margin: "2px" }}>
      <Box sx={{ backgroundColor: "#e5e5e5" }}>
        <ArrowDropUpIcon />
      </Box>
      <Box
        sx={{
          backgroundColor:
            props.strike.type === STRIKE_TYPE.P ? "#87B0FF" : "#FFCB7F",
          height: "45px",
          width: "65px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          margin: "2px 0px"
          // marginBottom: '4px',
        }}
      >
        {props.strike.strike}
      </Box>
      <Box sx={{ backgroundColor: "#e5e5e5" }}>
        <ArrowDropDownIcon />
      </Box>
    </Box>
  );
};
