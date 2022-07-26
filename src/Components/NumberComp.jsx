import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { NextNum } from "./Number.jsx/NextNum";
import { Previousnum } from "./Previousnum";

export const NumberComp = () => {
  return (
    <Card sx={{ bgcolor: "green" }}>
      <CardContent>
        <Typography className="number" variant="h4" height={50}>
          Number
        </Typography>
        <NextNum />
        <Previousnum />
      </CardContent>
    </Card>
  );
};
