import { render, screen } from '@testing-library/react'
import React from 'react'

import { App } from './App'

describe(`App component`, (): void => {
  test(`renders learn react link`, (): void => {
    render(<App />)

    const linkElement: HTMLElement = screen.getByText(/learn react/iu)

    expect(linkElement).toBeInTheDocument()
  })
})
