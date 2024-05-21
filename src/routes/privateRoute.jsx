import React from 'react'

const PrivateRoute = ({children}) => {
  return (
    <div className='privateRouteBody'>
        {children}
    </div>
  )
}

export default PrivateRoute