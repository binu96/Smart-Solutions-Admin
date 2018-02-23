import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css'

class NavigationSideList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: '1'};
    }

    onNavigationBtnChange = (e) => {
        this.setState({index: e.currentTarget.dataset.id});
    };

    render() {
        let data = {
            navigationFilter: [
                {
                    index: '1',
                    path: '/',
                    title: 'Dashboard',
                    icon: 'icon ion-home'
                },
                {
                    index: '2',
                    path: '/product-upload',
                    title: 'Upload a Product',
                    icon: 'icon ion-document-text'
                },
                {
                    index: '3',
                    path: '/upload-site-map',
                    title: 'Upload Site Map',
                    icon: 'icon ion-ios-navigate-outline'
                }
            ]
        };

        return (
            <div className="left-menu">
                <ul className="nav nav-sidebar">
                    {data.navigationFilter.map(({index, path, title, icon}) => {
                        return <li onClick={this.onNavigationBtnChange.bind(this)}
                                   key={index}
                                   data-id={index}
                                   className={(this.state.index === index) ? 'active' : null}>
                            <Link to={path} className="link" title={title}>
                                <i className={icon}/>
                            </Link>
                        </li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default NavigationSideList