import React, { useState } from "react";
import { Grid } from "@mui/material";

export const Tables1 = () => {
  const [arr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {arr.map((item) => (
          <Grid item xs={12}>
            <h1>{item * 2}</h1>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
