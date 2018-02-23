import React from 'react'
import ProductsBody from '../ProductsBody/ProductsBody'

class ProductsHeader extends React.Component {
    render() {
        return (

            <div>
                <div className="well well-sm">
                    <strong>Products Available</strong>
                </div>
                <div id="products" className="row grid-group-item">
                    <ProductsBody/>
                </div>
            </div>

        )
    }
}

export default ProductsHeader