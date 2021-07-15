import React, { Component } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import List from '../List/List'
import Summary from '../Summary/Summary';

const InputBorder = styled.input`
border:1px solid lightblue;
box-shadow:3px 3px 3px rgb(226,226,226);
margin:20px;
width:300px;
height:30px;
border-radius:5%;
`;

export default class InputItem extends Component {
    state = {
        item: {
            id: '',
            list: ''
        }
        
    }
    handleKeyUp = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) { return }
        else {
            const newItem = { id: nanoid(), list: target.value }
            this.setState({ item: newItem })
        }
        target.value=''
    }

    render() {
        const { item } = this.state
        return (
            <div>
                <InputBorder type="text" onKeyUp={this.handleKeyUp} placeholder="Please input..." />
                <List newItem={item} />
                <Summary />
            </div>
        )
    }
}
