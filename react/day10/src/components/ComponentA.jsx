import React, { Component } from 'react'

function ComponentA() {
  return (
    <div className="box"><h1>Component A</h1>
        <ComponentB />
    </div>
  )
}

export default ComponentA