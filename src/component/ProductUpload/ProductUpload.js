import React from 'react'

import Background from '../Background'
import Footer from '../Footer/Footer'

class ProductUpload extends React.Component {
    render() {
        return <div>
            <Background/>
            <div className="dashboard">
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="content-block">
                            <form className="form-horizontal">
                                <fieldset>
                                    <div className="well well-sm">
                                        <strong>Add a Product</strong>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Product ID</label>
                                        <div className="col-md-4">
                                            <input id="product_id" name="product_id" placeholder="Product ID"
                                                   className="form-control input-md" required="" type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Product Name</label>
                                        <div className="col-md-4">
                                            <input id="product_name" name="product_name" placeholder="Product Name"
                                                   className="form-control input-md" required="" type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label">Product Description</label>
                                        <div className="col-md-4">
                                            <input id="product_name_fr" name="product_name_fr"
                                                   placeholder="Product Description" className="form-control input-md"
                                                   required="" type="text-field"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label"></label>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="col-md-4 control-label">Product Image</label>
                                                <div className="col-md-4">
                                                    <input id="filebutton" name="filebutton" className="input-file"
                                                           type="file"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-8">
                                                    <button id="singlebutton" name="singlebutton"
                                                            className="btn btn-success">Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    }
}

export default ProductUpload