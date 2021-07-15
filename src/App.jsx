import React from 'react'
import styled from 'styled-components'
import InputItem from './components/InputItem'


const MainContent = styled.div`
width:500px;
border:1px solid gray;
margin:0 auto;
text-align:center
`;

const App = () => (
    <MainContent>
        <InputItem/>
    </MainContent>
)
export default App