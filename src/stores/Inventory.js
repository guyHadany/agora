import { observable, action } from 'mobx'
import { Item } from './Item'


export class Inventory {

    @observable items = []

    @action buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        if (item.quantity === 1) {
            let index = this.items.indexOf(item)
            this.items.splice(index, 1)
        } else {
            item.quantity--
        }
    }

    @action addItem = (name, price = 0, quantity = 1) => {
        let item = this.items.find(i => i.name === name)
        if (item) {
            item.quantity++
        } else {
            let newItem = new Item(name, price, quantity)
            this.items.push(newItem)
        }
    }
    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
}

