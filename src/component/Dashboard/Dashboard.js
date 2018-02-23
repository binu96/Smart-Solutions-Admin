import React from 'react'

import './dashboard.css'
import './button.css'

import Background from '../Background'
import Footer from '../Footer/Footer'
import ProductsHeader from './ProductsHeader/ProductsHeader'

class Dashboard extends React.Component {
    render() {
        return <div>
            <Background/>
            <div className="dashboard">
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="content-block">
                            <ProductsHeader/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    }
}

export default Dashboard