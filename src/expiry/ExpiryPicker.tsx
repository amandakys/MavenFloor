import React from "react";
import moment, { Moment } from "moment";
import MonthContainer from "./MonthContainer";
import { Box } from "@mui/material";

interface ExpiryPickerProps {
  dates: Moment[];
  onDateClick: (date: Moment) => void;
}

const ExpiryPicker: React.FC<ExpiryPickerProps> = ({ dates, onDateClick }) => {
  const groupedByYearAndMonth = dates.reduce((results, date) => {
    const yearMonthKey: string = date.format("YYYY-MM");
    if (!results[yearMonthKey]) results[yearMonthKey] = [];
    results[yearMonthKey].push(date);
    return results;
  }, {} as { [key: string]: Moment[] });

  // const now = Moment()
  var now = moment.utc("2022-05-08");

  const monthContainers = Object.keys(groupedByYearAndMonth)
    .sort()
    .map((key) => {
      const monthValues = groupedByYearAndMonth[key];
      let collapsed = true;
      if (monthValues.length > 0) {
        const firstDay = monthValues.sort()[0];
        const diff = firstDay.diff(now, "days");

        if (diff <= 10) {
          collapsed = false;
        }
      }
      return (
        <MonthContainer
          key={key}
          dates={monthValues}
          initiallyCollapsed={collapsed}
          now={now}
          onDateClick={onDateClick}
        />
      );
    });

  return (
    <Box display="inline-grid" height="fit-content" marginRight="16px">
      {monthContainers}
    </Box>
  );
};

export default React.memo(ExpiryPicker);
