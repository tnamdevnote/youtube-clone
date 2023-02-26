import React from "react";
import { FormattedRelativeTime } from "react-intl";

const TimeFormatter = ({ isoDate }: { isoDate: Date }) => {
  const date = new Date(isoDate);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.round(diff / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  let unit;
  let value;
  if (seconds < 60) {
    unit = "second";
    value = -seconds;
  } else if (minutes < 60) {
    unit = "minute";
    value = -minutes;
  } else if (hours < 24) {
    unit = "hour";
    value = -hours;
  } else if (days < 30) {
    unit = "day";
    value = -days;
  } else if (days < 365) {
    unit = "month";
    value = -Math.round(days / 30);
  } else {
    unit = "year";
    value = -Math.round(days / 365);
  }
  // Set proper type
  return <FormattedRelativeTime value={value} unit={unit} />;
};

export default TimeFormatter;
