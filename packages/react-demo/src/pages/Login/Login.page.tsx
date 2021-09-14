import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link as MuiLink,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { ClassNameMap } from '@material-ui/styles/withStyles'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { Footer } from '../../components/Footer/Footer.component'
import { HeaderContainer } from '../../containers/Header/Header.container'
import { RouteNames } from '../../enums/RouteNames.enum'
import { MainLayout } from '../../layouts/MainLayout/MainLayout'
import { useLoginPageStyles } from './Login.page.styles'
import { LoginPageClassNames } from './Login.page.types'

export const LoginPage = (): ReactElement => {
  const classes: ClassNameMap<LoginPageClassNames> = useLoginPageStyles()

  return (
    <MainLayout footer={<Footer />} header={<HeaderContainer />}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component={`h1`} variant={`h5`}>
          {`Sign in`}
        </Typography>
        <form className={classes.form} noValidate={true}>
          <TextField
            autoComplete={`email`}
            autoFocus={true}
            fullWidth={true}
            id={`email`}
            label={`Email Address`}
            margin={`normal`}
            name={`email`}
            required={true}
            variant={`outlined`}
          />
          <TextField
            autoComplete={`current-password`}
            fullWidth={true}
            id={`password`}
            label={`Password`}
            margin={`normal`}
            name={`password`}
            required={true}
            type={`password`}
            variant={`outlined`}
          />
          <FormControlLabel control={<Checkbox color={`primary`} value={`remember`} />} label={`Remember me`} />
          <Button className={classes.submit} color={`primary`} fullWidth={true} type={`submit`} variant={`contained`}>
            {`Sign In`}
          </Button>
          <Grid container={true}>
            <Grid item={true} xs={true}>
              <MuiLink component={Link} to={`/forgot-password`} variant={`body2`}>
                {`Forgot password?`}
              </MuiLink>
            </Grid>
            <Grid item={true}>
              <MuiLink component={Link} to={RouteNames.Register} variant={`body2`}>
                {`Don't have an account? Sign Up`}
              </MuiLink>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </MainLayout>
  )
}
