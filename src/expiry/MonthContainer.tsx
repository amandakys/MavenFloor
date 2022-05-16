import React, { useEffect, useState } from "react";
import WeekContainer from "./WeekContainer";
import { Box, Button } from "@mui/material";
import { Moment } from "moment";
import "./ExpiryPicker.scss";

interface MonthContainerProps {
  initiallyCollapsed: boolean;
  dates: Moment[];
  now: Moment;
  onDateClick: (date: Moment) => void;
}

const MonthContainer: React.FC<MonthContainerProps> = ({
  initiallyCollapsed,
  dates,
  now,
  onDateClick
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const switchCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const groupedByWeekNumber = dates.reduce((results, date) => {
    const week = date.week().toString();
    if (!results[week]) results[week] = [];
    results[week].push(date);
    return results;
  }, {} as { [key: string]: Moment[] });

  const focusedWeekContainers = Object.keys(groupedByWeekNumber)
    .sort()
    .map((key) => {
      const weekValues = groupedByWeekNumber[key];
      const weekDays = [null, null, null, null, null] as (Moment | null)[];
      for (let val of weekValues) {
        if (val.day() === 0 || val.day() === 6 || val.diff(now, "days") > 10)
          // ignore Sunday and Saturday
          continue;

        weekDays[val.day() - 1] = val;
      }

      if (weekDays.every((x) => x === null)) return <></>;

      return (
        <WeekContainer
          key={"week-" + key}
          dates={weekDays}
          onClick={onDateClick}
        />
      );
    });
  const weekContainers = Object.keys(groupedByWeekNumber)
    .sort()
    .map((key) => {
      const weekValues = groupedByWeekNumber[key];
      const weekDays = [null, null, null, null, null] as (Moment | null)[];
      for (let val of weekValues) {
        if (val.day() === 0 || val.day() === 6)
          // ignore Sunday and Saturday
          continue;
        weekDays[val.day() - 1] = val;
      }

      if (weekDays.every((x) => x === null)) return <></>;

      return (
        <WeekContainer
          key={"week-" + key}
          dates={weekDays}
          onClick={onDateClick}
        />
      );
    });

  if (dates.length === 0) return <></>;

  const title =
    dates[0].year() === now.year()
      ? dates[0].format("MMM")
      : dates[0].format("MMM YY");

  if (collapsed && !initiallyCollapsed) {
    return (
      <div>
        <Button
          sx={{
            height: "45px",
            width: "240px",
            fontSize: "20px !important",
            borderRadius: "0",
            marginBottom: "4px",
            marginTop: "4px"
          }}
          disableElevation
          variant={"contained"}
          onClick={() => switchCollapsed()}
          //   className="month-button-style"
        >
          {title}
        </Button>
        <table>
          <tbody>{focusedWeekContainers}</tbody>
        </table>
      </div>
    );
  } else if (collapsed) {
    return (
      <div>
        <Button
          sx={{
            height: "45px",
            width: "240px",
            fontSize: "20px !important",
            borderRadius: "0",
            marginBottom: "4px",
            marginTop: "4px"
          }}
          disableElevation
          variant={"contained"}
          onClick={() => switchCollapsed()}
          //   className="month-button-style"
        >
          {title}
        </Button>
      </div>
    );
  }

  return (
    <Box display="inline-block">
      <Button
        sx={{
          height: "45px",
          width: "240px",
          fontSize: "20px !important",
          borderRadius: "0",
          marginBottom: "8px",
          marginTop: "4px"
        }}
        disableElevation
        variant={"contained"}
        onClick={() => switchCollapsed()}
      >
        {title}
      </Button>
      <table>
        <tbody>{weekContainers}</tbody>
      </table>
    </Box>
  );
};

export default React.memo(MonthContainer);
