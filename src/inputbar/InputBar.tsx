import { Box } from "@mui/material";
import { Moment } from "moment";
import { Leg, StrikeInputType } from "../App";
import { ExpiryTag } from "./ExpiryTag";
import { StrikeTag } from "./StrikeTag";

type InputBarProps = {
  legs: Leg[];
  currentExp: Moment | undefined;
  currentStrikes: StrikeInputType[];
};
export const InputBar = (props: InputBarProps) => {
  console.log(props.currentExp, "exp");
  console.log(props.currentStrikes, "strikes");
  console.log(props.legs, "legs");

  const buildStrikes = (strikes: StrikeInputType[]) => {
    return strikes.map((s) => <StrikeTag strike={s} />);
  };

  const buildLegs = () => {
    const legTags = [];
    props.legs.forEach(({ expiry, strikes }) =>
      legTags.push(
        <Box display="flex">
          <Box sx={{ marginTop: "30px" }}>
            <ExpiryTag date={expiry} />
          </Box>
          <Box>{buildStrikes(strikes)}</Box>
        </Box>
      )
    );

    return legTags;
  };

  return (
    <Box sx={{ backgroundColor: "#2E3E47", height: "100vh", width: "300px" }}>
      {buildLegs()}
      <Box>
        <Box display="flex">
          <Box sx={{ marginTop: "30px" }}>
            {props.currentExp && <ExpiryTag date={props.currentExp} />}
          </Box>
          <Box>{buildStrikes(props.currentStrikes)}</Box>
        </Box>
      </Box>
    </Box>
  );
};
