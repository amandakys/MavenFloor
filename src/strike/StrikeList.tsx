import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { StrikeInputType, STRIKE_TYPE } from "../App";
import { Numpad } from "../numpad/Numpad";
import { StrikeButton } from "./StrikeButton";

const NUM_STRIKES = 40;
const STRIKE_INTERVAL = 25;

type StrikeListProps = {
  onStrikeClick: (strike: StrikeInputType) => void;
};
export const StrikeList = (props: StrikeListProps) => {
  const [value, setValue] = useState<String>();
  const [firstStrike, setFirstStrike] = useState<number>();
  const centerStrike = 2200;

  useEffect(() => {
    const val = value ? Number(value) : undefined;
    if (!val) {
      setFirstStrike(centerStrike - (NUM_STRIKES / 2) * STRIKE_INTERVAL);
    } else if (val < 10) {
      //1 digit
      if (val * 1000 >= centerStrike) {
        setFirstStrike(val * 1000);
      } else {
        setFirstStrike((val + 1) * 1000 - STRIKE_INTERVAL);
      }
    } else if (val < 100) {
      //2 digit
      if (val * 100 >= centerStrike) {
        setFirstStrike(val * 100);
      } else {
        setFirstStrike((val + 1) * 100 - STRIKE_INTERVAL);
      }
    } else if (val < 1000) {
      //3 digit
      if (val * 10 >= centerStrike) {
        setFirstStrike(val * 10);
      } else {
        setFirstStrike((val + 1) * 10 - STRIKE_INTERVAL);
      }
    } else {
      //4 digit
      setFirstStrike(Number(value));
    }
  }, [value, centerStrike]);

  const buildStrikes = () => {
    let strikes = [];
    let hasCenterStrike = false;

    for (let i = 0; i < NUM_STRIKES; i++) {
      let val = firstStrike + i * STRIKE_INTERVAL;
      if (val === centerStrike) hasCenterStrike = true;
      strikes.push(
        <StrikeButton
          value={val}
          centerStrike={centerStrike}
          onStrikeClick={props.onStrikeClick}
        />
      );
    }

    if (!hasCenterStrike) {
      strikes.pop();
      strikes.unshift(
        <StrikeButton
          value={centerStrike}
          centerStrike={centerStrike}
          onStrikeClick={props.onStrikeClick}
        />
      );
    }

    return strikes;
  };

  const onChange = (_value) => {
    setValue(_value);
  };
  return (
    <Box display="flex">
      <div>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
          sx={{ width: "140px", borderRadius: "0", marginBottom: "4px" }}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        {buildStrikes()}
      </div>
      <Numpad onChange={onChange} onKeyPress={() => {}} />
    </Box>
  );
};
