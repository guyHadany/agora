import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item';


@observer
class Market extends Component {

    addItem = (e) => {
        if(e.key === 'Enter'){
            this.props.store.addItem(e.target.value)
            this.refs.input.value = ''
        }
    }

    render() {
        return (
            <div>
            <input placeholder='Enter new item' onKeyDown={this.addItem} ref="input"/>
            {this.props.store.items.map((i, index) => <Item key={index} item={i} store={this.props.store}/>)}
            </div>
        );
    }
}

export default Market;