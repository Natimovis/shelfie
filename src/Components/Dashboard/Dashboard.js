import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    render() {

        let mappedInventory = this.props.inventory.map((val) => {
            return (
                <Product inventory = {this.props.inventory} val={val} />
                )
                console.log(val)
        })

        return (
            <div>
                Dashboard
                {/* {this.props.inventory} */}
                {mappedInventory}
                {/* <Product /> */}
            </div>
        )
    }
}

