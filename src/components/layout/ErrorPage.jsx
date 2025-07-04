import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

function ErrorPage() {

  const error = useRouteError();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <img src='./404_animation.gif' />
      {error.data}
      <button className='bg-red-500 text-amber-50 font-bold p-3 rounded-2xl cursor-pointer' onClick={handleClick}> Go Back</button>
    </div>
  )
}

export default ErrorPage
