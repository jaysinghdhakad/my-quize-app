import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthentication } from "../../context/autenticationContext";
import { useState } from "react";


const useStyles = makeStyles({
  signUpArea: {
    width: "30%",
    marginTop: "10rem",
    border: "1px solid black",
    padding: "1rem",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  inputFileldHeading: {
    marginTop: "0.5rem",
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  button: {
    fontSize: "1.5rem",
    height: "3rem",
    padding: "5px",
    width: "6rem",
    border: "1px solid black",
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
  },
});
function SignUpBox() {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailID, setEmailID] = useState<string>();
  const [flag, setFlag] = useState<boolean>(false);
  const { signUpUser } = useAuthentication();
  const classes = useStyles();

  function getUserName(e: any) {
    setUserName(e.target.value);
  }
  function getPassword(e: any) {
    setPassword(e.target.value);
  }
  function getEmailId(e: any) {
    setEmailID(e.target.value);
  }
  function checkPassword(e: any) {
    if (password === e.target.value) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }
  async function getUserSignUp() {
    console.log("i am working????");
    if (flag) {
      console.log("am i working");
      await   signUpUser(userName, password, emailID);

    }
  }

  return (
    <Container className={classes.signUpArea}>
      <Typography className={classes.heading}>sign Up</Typography>
      <Typography className={classes.inputFileldHeading}>userName</Typography>
      <TextField onChange={(e) => getUserName(e)}></TextField>
      <Typography className={classes.inputFileldHeading}>e-mail</Typography>
      <TextField onChange={(e) => getEmailId(e)}></TextField>
      <Typography className={classes.inputFileldHeading}>passward</Typography>
      <TextField onChange={(e) => getPassword(e)}></TextField>
      <Typography className={classes.inputFileldHeading}>
        Re-type password
      </Typography>
      <TextField onChange={(e) => checkPassword(e)}></TextField>
      <Button className={classes.button} onClick={() => getUserSignUp()}>
        subMit
      </Button>
    </Container>
  );
}

export default SignUpBox;
