import { Link, Paper, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

export const Footer = (): ReactElement => {
  return (
    <Paper
      component={`footer`}
      elevation={4}
      square={true}
      style={{ alignItems: `center`, display: `flex`, height: 64, justifyContent: `center` }}
    >
      <Typography align={`center`} color={`textSecondary`} variant={`body2`}>
        {`Copyright © `}
        <Link color={`inherit`} href={`https://github.com/Ofadiman/eslint-configs`}>
          {`@ofadiman/eslint-configs`}
        </Link>
        {` `}
        {new Date().getFullYear()}
        {`.`}
      </Typography>
    </Paper>
  )
}
