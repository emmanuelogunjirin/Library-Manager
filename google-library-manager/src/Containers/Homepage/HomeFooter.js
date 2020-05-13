import React from 'react';
import Copyright from '../../Components/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../Components/Homepage/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(16),
    display: 'flex',
  },
  iconsWrapper: {
    height: 5,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height:48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={0} md={12}>
            <Grid
              container
              direction="column"
              justify="center"
              className={classes.iconsWrapper}
              spacing={2}
              >

              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
            </Grid>
          </Grid>
      </Container>
    </Typography>
  );
}
