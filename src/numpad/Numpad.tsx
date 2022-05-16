import { Box, Button, ButtonProps, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     padding: 0,
//     width: '100%'
//   },
//   numberRow: {
//   },
//   button: {
//   },
// }));

type MuiNumpadProps = {
  onChange: (s: string) => void;
  onKeyPress: (s: string) => void;
};

export const Numpad = (props: MuiNumpadProps) => {
  const { onChange, onKeyPress } = props;

  // const classes = useStyles();

  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (_value) => {
    const newValue = inputValue.concat(_value);
    setInputValue(newValue);
    onChange(newValue);
  };

  const onButtonPress = (_value) => {
    if (onChange) handleOnChange(_value);
    if (onKeyPress) onKeyPress(_value);
  };

  const handleClear = () => {
    setInputValue("");
    onChange("");
  };

  const handleDelete = () => {
    const newString = inputValue.substring(0, inputValue.length - 1);
    setInputValue(newString);
    onChange(newString);
  };

  return (
    <Draggable handle=".handle">
      <Box
        p={1}
        sx={{
          backgroundColor: "#e5e5e5",
          height: "fit-content",
          width: "154px",
          borderRadius: "5px"
        }}
      >
        <Box
          className="handle"
          sx={{
            backgroundColor: "white",
            height: "10px",
            width: "154px",
            borderRadius: "5px",
            marginBottom: "8px"
          }}
        />

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {[1, 2, 3].map((value) => (
                <Grid key={value} item>
                  <NumpadButton
                    onClick={() => onButtonPress(value)}
                    color="primary"
                    variant="outlined"
                  >
                    {value}
                  </NumpadButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {[4, 5, 6].map((value) => (
                <Grid key={value} item>
                  <NumpadButton
                    onClick={() => onButtonPress(value)}
                    color="primary"
                    variant="outlined"
                  >
                    {value}
                  </NumpadButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {[7, 8, 9].map((value) => (
                <Grid key={value} item>
                  <NumpadButton
                    onClick={() => onButtonPress(value)}
                    color="primary"
                    variant="outlined"
                  >
                    {value}
                  </NumpadButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid key="dot" item>
                <NumpadButton
                  disabled={!inputValue.length}
                  onClick={handleDelete}
                  color="primary"
                  variant="outlined"
                >
                  &larr;
                </NumpadButton>
              </Grid>
              <Grid key={0} item>
                <NumpadButton
                  onClick={() => onButtonPress(0)}
                  color="primary"
                  variant="outlined"
                >
                  0
                </NumpadButton>
              </Grid>
              <Grid key="clear" item>
                <NumpadButton
                  disabled={!inputValue.length}
                  onClick={handleClear}
                  color="primary"
                  variant="outlined"
                >
                  C
                </NumpadButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Draggable>
  );
};

const NumpadButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 0,
  paddingLeft: 0,
  justifyContent: "center",
  padding: 0,
  color: "black",
  height: "45px",
  width: "45px",
  minWidth: "45px"
}));
