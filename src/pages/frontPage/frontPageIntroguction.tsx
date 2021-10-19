import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
const useStyles = makeStyles({
  IntroductionBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "10rem",
    height: "50%",
    width: "60%",
  },
  Introduction: {
    textAlign: "center",
    fontSize: "3.5rem",
  },
  button: {
    width: "10rem",
    height: "3rem",
    fontSize: "2rem",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid black",
  },
});

function FrontPageIntroduction() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.IntroductionBox}>
      <Typography className={classes.Introduction}>
        Welcome to the Novel Trivia app. Click the button below to enter the app{" "}
      </Typography>
      <Button
      onClick={()=>navigate("/QuizeMenu")} 
      className={classes.button}>Enter</Button>
    </Container>
  );
}

export default FrontPageIntroduction;
