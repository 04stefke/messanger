import {render, screen} from '@testing-library/react'
import Login from './Login'
import {test} from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
test('should render the login page', () => {
  render(
  <BrowserRouter>
    <Login/>
  </BrowserRouter>)
  const textElement = screen.getByText('Login')
  expect(textElement).toBeVisible()
})
