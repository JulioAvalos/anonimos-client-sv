import { Grid, Typography } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { useStyles } from "../utils/global-style";

const Wallet: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center">
        <Grid item>
        <Typography variant="h4" className={classes.title}>Wallet</Typography>
        </Grid>
    </Grid>
  );
};

export default Wallet;
