import { makeStyles, useTheme } from '@mui/material';
import React from 'react'

const useStyles = makeStyles(theme => ({
    grid: {
      backgroundColor: "grey",
      height: "50vh",
      textAlign: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }));
  
const OtpInput = () => {

  return (
    <div>OtpInput</div>
  )
}

export default OtpInput