import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from './component/Dashboard/Dashboard';
import ProductUpload from './component/ProductUpload/ProductUpload';
import UploadSiteMap from './component/UploadSiteMap/UploadSiteMap';

const App = ({location}) => (
    <div>
        <Route location={location} exact path="/" component={Dashboard}/>
        <Route location={location} exact path="/product-upload" component={ProductUpload}/>
        <Route location={location} exact path="/upload-site-map" component={UploadSiteMap}/>
    </div>
);

App.prototype = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    })
};

export default App;