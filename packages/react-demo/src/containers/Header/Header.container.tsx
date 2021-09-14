import { AppBar, Box, Button, Link as MuiLink, Theme, Toolbar, Typography, useTheme } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Link, RouterProps, useHistory } from 'react-router-dom'

export const HeaderContainer = (): ReactElement => {
  const history: RouterProps['history'] = useHistory()
  const theme: Theme = useTheme()

  const getOnButtonClickHandler = (href: string): (() => void) => {
    return (): void => {
      history.push(href)
    }
  }

  return (
    <AppBar position={`static`}>
      <Toolbar>
        <Typography variant={`h6`}>
          <MuiLink color={`inherit`} component={Link} to={`/`}>
            {`Eslint configs demo`}
          </MuiLink>
        </Typography>
        <Box style={{ display: `flex`, flexGrow: 1 }} />
        <Box display={`grid`} gridGap={theme.spacing(2)} gridTemplateColumns={`1fr 1fr`}>
          <Button color={`secondary`} onClick={getOnButtonClickHandler(`register`)} variant={`contained`}>
            {`Register`}
          </Button>
          <Button color={`secondary`} onClick={getOnButtonClickHandler(`login`)} variant={`contained`}>
            {`Login`}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
