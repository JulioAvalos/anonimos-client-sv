import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../utils/global-style";

const MainPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h4" className={classes.title}>Hola Mundo!</Typography>
      </Grid>
    </Grid>
  );
};

export default MainPage;
