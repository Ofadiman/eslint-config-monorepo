import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link as MuiLink,
  TextField,
  Typography
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { ClassNameMap } from '@material-ui/styles/withStyles'
import React, { ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FieldValues, UseFormReturn } from 'react-hook-form/dist/types'
import { ControllerProps } from 'react-hook-form/dist/types/controller'
import { Link } from 'react-router-dom'

import { AppService } from '../../api/App.service'
import { Footer } from '../../components/Footer/Footer.component'
import { HeaderContainer } from '../../containers/Header/Header.container'
import { RouteNames } from '../../enums/RouteNames.enum'
import { MainLayout } from '../../layouts/MainLayout/MainLayout'
import { useRegisterPageStyles } from './Register.page.styles'
import { RegisterPageClassNames } from './Register.page.types'

type RegisterFormState = { email: string; name: string; password: string }

type ControllerRenderArgs<FormState extends FieldValues = FieldValues> = Parameters<
  ControllerProps<FormState>['render']
>[0]

const formSubmitHandler = async (formValues: Record<string, string>): Promise<void> => {
  try {
    await AppService.register({ json: formValues })
  } catch (error: unknown) {
    console.error(`error`)
    console.error(JSON.stringify(error, null, 2))
  }
}

export const RegisterPage = (): ReactElement => {
  const classes: ClassNameMap<RegisterPageClassNames> = useRegisterPageStyles()
  const { handleSubmit, control, formState }: UseFormReturn<RegisterFormState> = useForm<RegisterFormState>()

  return (
    <MainLayout footer={<Footer />} header={<HeaderContainer />}>
      <Container maxWidth={`xs`}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component={`h1`} variant={`h5`}>
            {`Sign up`}
          </Typography>
          <form className={classes.form} noValidate={true} onSubmit={handleSubmit(formSubmitHandler)}>
            <Controller
              control={control}
              defaultValue={``}
              name={`name`}
              render={({ field }: ControllerRenderArgs<RegisterFormState>): ReactElement => (
                <TextField
                  {...field}
                  autoComplete={`name`}
                  autoFocus={true}
                  error={Boolean(formState.errors.name)}
                  fullWidth={true}
                  helperText={`Invalid value.`}
                  id={`name`}
                  label={`Name`}
                  margin={`normal`}
                  name={`name`}
                  required={true}
                  variant={`outlined`}
                />
              )}
              rules={{ minLength: 4, required: true }}
            />
            <Controller
              control={control}
              defaultValue={``}
              name={`email`}
              render={({ field }: ControllerRenderArgs<RegisterFormState>): ReactElement => (
                <TextField
                  {...field}
                  autoComplete={`email`}
                  error={Boolean(formState.errors.name)}
                  fullWidth={true}
                  helperText={`Invalid value.`}
                  id={`email`}
                  label={`Email Address`}
                  margin={`normal`}
                  name={`email`}
                  required={true}
                  variant={`outlined`}
                />
              )}
              rules={{ minLength: 4, required: true }}
            />
            <Controller
              control={control}
              defaultValue={``}
              name={`password`}
              render={({ field }: ControllerRenderArgs<RegisterFormState>): ReactElement => (
                <TextField
                  {...field}
                  autoComplete={`current-password`}
                  error={Boolean(formState.errors.name)}
                  fullWidth={true}
                  helperText={`Invalid value.`}
                  id={`password`}
                  label={`Password`}
                  margin={`normal`}
                  name={`password`}
                  required={true}
                  type={`password`}
                  variant={`outlined`}
                />
              )}
              rules={{ minLength: 4, required: true }}
            />
            <Grid item={true} xs={12}>
              <FormControlLabel
                control={<Checkbox color={`primary`} value={`allowExtraEmails`} />}
                label={`I want to receive marketing promotions.`}
              />
            </Grid>
            <Button className={classes.submit} color={`primary`} fullWidth={true} type={`submit`} variant={`contained`}>
              {`Sign Up`}
            </Button>
            <Grid container={true} justifyContent={`flex-end`}>
              <Grid item={true}>
                <MuiLink component={Link} to={RouteNames.Login} variant={`body2`}>
                  {`Already have an account? Sign in`}
                </MuiLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </MainLayout>
  )
}
