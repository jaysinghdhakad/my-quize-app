import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import{ makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    header: {
    width: "100%",
    borderEndStartRadius: "50%",
    borderEndEndRadius: "50%",
    border: "1px solid rgba(150, 150, 150, 0.2)",
    },
    Heading:{
       
        textAlign: "center",
        fontSize : "3rem",
    }
})
function QuizesHeader(){
    const classes = useStyles()
    return (
        <AppBar className={classes.header}
        >
            <Typography className={classes.Heading}>
            Quize menu
            </Typography>
        </AppBar>

    )
}

export default QuizesHeader;