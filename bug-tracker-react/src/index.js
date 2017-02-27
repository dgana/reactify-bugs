import React from 'react'
import { render } from 'react-dom'
import { MainTitle, Form, BugList, Footer } from './components'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className='container'>
          <MainTitle />
          <Form />
          <BugList />
        </div>
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
