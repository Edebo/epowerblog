import React from 'react'

const Header = ({title,date}) => {

  const homeHeader = ()=>{
     return  <h3>Epower Blog</h3>
  }

  const postHeader = () => {

    const dateString = new Date(date).toLocaleDateString('en-US',{ month: 'long',day: 'numeric' ,year: 'numeric' })
      return <div className="post-header">
                <h1>{title}</h1>
                <h3>{`published on ${dateString}`}</h3>
            </div>
  }
  return (
    <div className='header'>
     {title ? postHeader():homeHeader()}
    </div>
  )
}

export default Header
