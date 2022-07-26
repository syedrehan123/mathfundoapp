import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Tables1 } from "./Tables/Tables1";

export const Tables = () => {
  return (
    <Card sx={{ bgcolor: "orange" }}>
      <CardContent>
        <Typography variant="h4">Tables</Typography>
        <Tables1 />
      </CardContent>
    </Card>
  );
};
