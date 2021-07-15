import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Summary extends Component {
    state = {
        len: 3
    }
    componentDidMount() {
        this.token = PubSub.subscribe('length', (_, data) => {
            this.setState({ len: data })
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        const { len } = this.state
        if (len === '') {
            return (
                <div>
                    Total List is:3
                </div>
            )
        } else {
            return (
                <div>
                    Total List is:{len}
                </div>
            )
        }

    }
}

