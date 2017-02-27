console.log('HAII')
import React from 'react'
import { render } from 'react-dom'

class Hello extends React.Component {
  render () {
    return (
      <p>
        Hello Bandung!
      </p>
    )
  }
}

render(<Hello />, document.getElementById('app'))
