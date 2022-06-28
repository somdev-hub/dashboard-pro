import React from 'react'
import styled from 'styled-components'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  )
}

const Div=styled.div`
position:relative;
`;


export default App