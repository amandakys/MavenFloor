import { Grid, Button, Box } from "@mui/material";
import { useState } from "react";

type NumPadProps = {
  onChange: (s: string) => void;
  onKeyPress: (s: string) => void;
};

export const NumPad = (props: NumPadProps) => {
  const { onChange, onKeyPress } = props;

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
    <Box sx={{ height: "fit-content", width: "fit-content" }}>
      <Grid container rowSpacing={1} spacing={2}>
        <Grid item xs={4}>
          <Button>1</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>2</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>3</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>4</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>5</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>6</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>7</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>8</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>9</Button>
        </Grid>
        <Grid item xs={4}>
          <Button></Button>
        </Grid>
      </Grid>
    </Box>
  );
};
