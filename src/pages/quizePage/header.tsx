import AppBar from "@material-ui/core/AppBar";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import TimerIcon from "@material-ui/icons/Timer";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import headerStyle from "./headerStyleObject";
import { useScore } from "../../context/scoreContext";

const useStyles = makeStyles(headerStyle);
function Header() {
  const classes = useStyles();
  const { state, dispatch } = useScore();
  const [timer, setTimer] = useState<number>(10);
  useEffect(()=>{
    setTimer(10)
  },[state.questionNumber])
  useEffect((): any => {
    let interval = setInterval(() => {
      setTimer((timer)=> timer -1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect((): any => {
    if(timer === 0){
      dispatch({
        type : "TIMER"
      })
    }
  } ,[timer,dispatch])

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.Toolbar}>
        <Typography className={classes.Player}>
          {" "}
          <Avatar src="/Avatar (1).jpg" className={classes.Avatar} />
          Name
        </Typography>
        <Typography className={classes.Timer}>
          <TimerIcon className={classes.Icon} /> : {timer}
        </Typography>
        <Typography className={classes.Score}>
          Score : {state.score}{" "}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
