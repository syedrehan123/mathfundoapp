import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const TopNav = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2} className="img">
        <Grid item xs={2}>
          <img src="Pickupbiz.jpg" alt="" height={100} />
        </Grid>
        <Grid item xs={1}>
          <Link to="/number" className="tabnav">
            <Button variant="contained" color="success">
              Number
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/Tables" className="tabnav">
            <Button variant="contained" color="warning">
              Tables
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/Square" className="tabnav">
            <Button variant="contained" color="error">
              Square
            </Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
