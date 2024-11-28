import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    let fullName="Mehwish Shakeel";
    let FvtDish="Biryani";
    let FvtColor="Purple";
  return (
    <div>
      <ChildComponent fullName={fullName}/>
      <ChildComponent FvtDish={FvtDish}/>
      <ChildComponent FvtColor={FvtColor}/>
    </div>
  )
}

export default ParentComponent
