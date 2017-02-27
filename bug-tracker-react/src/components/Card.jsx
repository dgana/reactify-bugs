import React from 'react'

export class Card extends React.Component {
  render () {
    const data = [
      { title: 'Hello World' },
      { title: 'Hello Dunia' }
    ]
    return (
      <div>
        {data.map((item, i) => {
           return (
             <div key={i}>
               <div className='card'>
                 <header className='card-header'>
                   <p className='card-header-title'>
                     {item.title}
                   </p>
                 </header>
                 <div className='card-content'>
                   <div className='content'>
                     <span className='tag is-info'></span>
                     <p>
                     </p>
                   </div>
                   <br />
                   <small className='tag is-primary'></small>
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
