import React, { Fragment, ReactElement } from 'react'

import { MainLayoutProps } from './MainLayout.types'

export const MainLayout = (props: MainLayoutProps): ReactElement => {
  return (
    <Fragment>
      {props.header}
      <main style={{ alignItems: `center`, display: `flex`, flexGrow: 1, justifyContent: `center` }}>
        {props.children}
      </main>
      {props.footer}
    </Fragment>
  )
}
