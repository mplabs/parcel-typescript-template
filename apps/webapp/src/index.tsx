import React from 'react'
import { render } from 'react-dom'

import './styles/index.scss'

const Application = (): JSX.Element => (
  <h1>Application</h1>
)

render(<Application />, document.querySelector('#root'))

