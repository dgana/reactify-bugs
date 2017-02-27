import React from 'react'

export class Card extends React.Component {
  render () {
    const data = [
      {
        id: '3a4b0d8a-290f-5f70-9846-dc89eaa306d5',
        desc: 'High Bugs',
        severity: 'Low',
        assignedTo: 'Alex',
        status: 'Open'
      },
      {
        id: '32440d8z-2avf-5z7k-ab46-dc89ea31sdcd5',
        desc: 'Low Bugs',
        severity: 'High',
        assignedTo: 'Syanmil',
        status: 'Closed'
      }
    ]
    return (
      <div>
        {data.map((item, i) => {
           return (
             <div key={i}>
               <div className='card'>
                 <header className='card-header'>
                   <p className='card-header-title'>
                     {item.id}
                   </p>
                 </header>
                 <div className='card-content'>
                   <div className='content'>
                     {item.desc}
                     <span className='tag is-info'>{item.severity}</span>
                     <p>
                       Assigned To:
                       {item.assignedTo}
                     </p>
                   </div>
                   <br />
                   <small className='tag is-primary'>{item.status}</small>
                 </div>
                 <footer className='card-footer'>
                   <a className='is-warning card-footer-item'>Close</a>
                   <a className='card-footer-item'>Delete</a>
                 </footer>
               </div>
               <br />
             </div>
           )
         })}
      </div>
    )
  }
}
