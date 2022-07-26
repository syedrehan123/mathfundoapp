import { Grid, Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Previousnum = () => {
  const [num, setnum] = useState(0);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              Number
            </Grid>
            <Grid item xs={6}>
              Next Number
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Number"
                variant="outlined"
                onChange={(e) => setnum(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h2">{Number(num) - 1}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
