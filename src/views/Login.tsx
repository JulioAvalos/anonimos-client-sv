import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../utils/global-style';

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h4" className={classes.title}>Login</Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
