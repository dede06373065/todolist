import React, { Component } from 'react'
import styled from 'styled-components'
import PubSub from 'pubsub-js'

const MyListStyle = styled.li`
position:relative;
color:rgb(30,30,30);
font-size:2rem;
list-style-type:none;
&:hover{
    background-color:lightpink;
    
}
`;
const DeleteButton = styled.button`
position:absolute;
right:10px;
width:60px;
color:white;
background-color:blue;
margin-top:10px;
&:hover{
    cursor:pointer;
}
`;
export default class List extends Component {
    state = {
        listShow:
            [
                {
                    id: 1,
                    list: 'shopping'
                },
                {
                    id: 2,
                    list: 'coding'
                },
                {
                    id: 3,
                    list: 'reading'
                }
            ]
    }

    handleDelete = (id) => {
        const { listShow } = this.state
        console.log('即将删掉的ID:'+id)
        const newList=listShow.filter((list)=>{
            return list.id!==id
        })
       this.setState({listShow:newList})
    }

    render() {
        const { listShow } = this.state
        const { newItem } = this.props
        if (newItem.id !== '') {
            listShow.unshift(newItem)
        }
        PubSub.publish('length', listShow.length)
        return (
            <ul>{
                listShow.map((item, index) => {
                    return (
                        <MyListStyle key={index}>{item.list}
                            <DeleteButton onClick={() => (this.handleDelete(item.id))}>Delete</DeleteButton>
                        </MyListStyle>
                    )
                })
            }
            </ul>
        )
    }
}
