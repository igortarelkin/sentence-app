import React, { FC } from "react";

interface StatusProps {
  status?: string;
}

export const StatusComponent: FC<StatusProps> = ({ status }) => {
  if (status === "answered") {
    return (
      <div
        style={{
          color: "#00cc00",
          marginLeft: "4em",
        }}
      >
        Status: {status}
      </div>
    );
  } else {
    return (
      <div
        style={{
          color: "red",
          marginLeft: "4em",
        }}
      >
        Status: {status}
      </div>
    );
  }
};
