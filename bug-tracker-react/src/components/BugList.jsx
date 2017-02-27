import React from 'react'
import { Card } from './Card'

export class BugList extends React.Component {
  render () {
    return (
      <div className='columns'>
        <div className='column is-medium' id='listBugs'>
          <Card />
        </div>
      </div>
    )
  }
}
