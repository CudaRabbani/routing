import React, {Component} from 'react';

class ProductDetails extends Component {

    handleSave = () => {
        //console.log('Save clicked');
        this.props.history.push('/products');
        //this.props.history.replace('/products'); //replace is usually used in login pages
    };
    render() {
        return (
            <div>
                <h1>Producst Details -{this.props.match.params.id}</h1>
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}


export default ProductDetails;

