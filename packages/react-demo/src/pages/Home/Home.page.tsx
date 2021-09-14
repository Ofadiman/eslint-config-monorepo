import { CircularProgress, Paper } from '@material-ui/core'
import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'

import { Footer } from '../../components/Footer/Footer.component'
import { HeaderContainer } from '../../containers/Header/Header.container'
import { MainLayout } from '../../layouts/MainLayout/MainLayout'

export const HomePage = (): ReactElement => {
  const [shouldDisplaySpinner, setShouldDisplaySpinner]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(true)

  useEffect((): void => {
    window.addEventListener(`click`, (): void => {
      setShouldDisplaySpinner((shouldDisplaySpinnerPrev: boolean): boolean => !shouldDisplaySpinnerPrev)
    })
  }, [])

  return (
    <MainLayout footer={<Footer />} header={<HeaderContainer />}>
      {shouldDisplaySpinner ? (
        <CircularProgress />
      ) : (
        <Paper elevation={4} style={{ alignSelf: `stretch`, flex: 1, margin: 50 }}>
          <div style={{ height: 2_000, margin: 50 }}>{`very long content`}</div>
        </Paper>
      )}
    </MainLayout>
  )
}
