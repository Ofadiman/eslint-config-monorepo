import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { RouteNames } from './enums/RouteNames.enum'
import { HomePage } from './pages/Home/Home.page'
import { LoginPage } from './pages/Login/Login.page'
import { RegisterPage } from './pages/Register/Register.page'

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={RouteNames.Home}>
          <HomePage />
        </Route>
        <Route exact={true} path={RouteNames.Register}>
          <RegisterPage />
        </Route>
        <Route exact={true} path={RouteNames.Login}>
          <LoginPage />
        </Route>
        <Route path={`*`}>{`not found`}</Route>
      </Switch>
    </BrowserRouter>
  )
}
