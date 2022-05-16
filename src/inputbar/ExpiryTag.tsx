import { Box } from "@mui/material";
import moment from "moment";
import { Moment } from "moment";

export const ExpiryTag = (props: { date: Moment }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#e5e5e5",
        height: "45px",
        width: "65px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        margin: "2px"
        // marginRight: '4px',
        // marginBottom: '4px',
      }}
    >
      {props.date.year() > moment().year()
        ? props.date.format("MMM D YY")
        : props.date.format("MMM D YY")}
    </Box>
  );
};
