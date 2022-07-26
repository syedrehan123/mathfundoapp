import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Square = () => {
  return (
    <Card sx={{ bgcolor: "orangered" }}>
      <CardContent>
        <Typography variant="h4">Square</Typography>
      </CardContent>
    </Card>
  );
};
