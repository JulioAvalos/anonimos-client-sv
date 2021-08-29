import { Grid, Typography, CircularProgress } from "@material-ui/core";
import { useStyles } from "../../utils/global-style";

const Spinner: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      <Grid item>
        <Typography className={classes.title}>Cargando, espere un momento...</Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <CircularProgress size={125} />
      </Grid>
    </Grid>
  );
};

export default Spinner;
