import React,{FC} from 'react';
import Grid from "@mui/material/Grid";

const PrivacyPolicy:FC=()=> {
    console.log("here")
    return (
        <Grid container spacing={2} justifyContent="center"
        alignItems="center"  marginTop={10}>
       <h2>Terms & Conditions</h2>
      </Grid>
    );
}

export default PrivacyPolicy;