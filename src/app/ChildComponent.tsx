import React from 'react'

const ChildComponent = (props:any) => {
    console.log(props)
  return (
    <div>
      <div></div>
      <h1 className='text-center  m-12'>
        {props.fullName}
        {props.FvtDish}
        {props.FvtColor}
      </h1>
     
    </div>
  )
}

export default ChildComponent
