import { makeStyles, Theme } from '@material-ui/core'
import { ClassNameMap } from '@material-ui/styles/withStyles'
import { StyleRules } from '@material-ui/styles/withStyles/withStyles'

import { LoginPageClassNames } from './Login.page.types'

export const useLoginPageStyles: () => ClassNameMap<LoginPageClassNames> = makeStyles((theme: Theme): StyleRules => {
  return {
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      margin: theme.spacing(1)
    },
    form: {
      marginTop: theme.spacing(1),
      width: `100%`
    },
    paper: {
      alignItems: `center`,
      display: `flex`,
      flexDirection: `column`,
      maxWidth: `80%`,
      padding: theme.spacing(3),
      width: 400
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }
})
