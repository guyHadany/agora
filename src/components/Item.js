import React, { Component } from 'react';
import { observer } from 'mobx-react'


@observer
class Item extends Component {

    buyItem = () => {
        this.props.store.buyItem(this.props.item.name)
    }

    handleDBClick = () => {
        let newPrice = prompt('put new price')
        this.props.store.changePrice(this.props.item.name, newPrice)
    }

    render() {
        let item = this.props.item
        return (
            <li onDoubleClick={this.handleDBClick}>
                {`${item.quantity} ${item.name} available at $${item.price} per item`}
                <button onClick={this.buyItem}>Buy</button>
            </li>
        );
    }
}

export default Item;