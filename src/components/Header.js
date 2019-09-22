import React from 'react'

const Header = ({title,date}) => {

  const homeHeader = ()=>{
     return  <h3>Epower Blog</h3>
  }

  const postHeader = () => {
      return <div>
                <h1>{title}</h1>
                <h3>{`published on ${date}`}</h3>
            </div>
  }
  return (
    <div className='header'>
     {title ? postHeader():homeHeader()}
    </div>
  )
}

export default Header
