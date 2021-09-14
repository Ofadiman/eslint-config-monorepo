import { makeStyles, Theme } from '@material-ui/core'
import { ClassNameMap } from '@material-ui/styles/withStyles'
import { StyleRules } from '@material-ui/styles/withStyles/withStyles'

import { RegisterPageClassNames } from './Register.page.types'

export const useRegisterPageStyles: () => ClassNameMap<RegisterPageClassNames> = makeStyles(
  (theme: Theme): StyleRules => {
    return {
      avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1)
      },
      form: {
        marginTop: theme.spacing(3),
        width: `100%`
      },
      paper: {
        alignItems: `center`,
        display: `flex`,
        flexDirection: `column`,
        marginTop: theme.spacing(8)
      },
      submit: {
        margin: theme.spacing(3, 0, 2)
      }
    }
  }
)
