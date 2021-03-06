import React from 'react';
import getAllProducts from '../../api/getAllProducts';
import Product from '../../components/Product';

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: {},
        };
    }

    componentDidMount() {
        console.log('make API call');
        getAllProducts().then(result => {
            console.log('API response:' + result);
            const baseId = result.id;
            if (result.groups) {
                console.log('iterate all groups');
                const products = {};
                result.groups.forEach(ele => {
                    products[ele.id] = ele;
                });
                this.setState({
                    products: products,
                    baseId: baseId
                });
            }
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        var prodList = '';
        if (this.state.products) {
            var prodList = Object.keys(this.state.products).map((id, index) => {
                return (<Product
                    key={index}
                    id={this.state.products[id].id}
                    baseId={this.state.baseId}
                    image={this.state.products[id].hero.href}
                    title={this.state.products[id].name}
                    imageList={this.state.products[id].images}
                    price={this.state.products[id].priceRange.selling.high}
                />);
            });
        }
        return (<div> {prodList} </div>);
    }
}



