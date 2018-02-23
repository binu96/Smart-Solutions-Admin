import React from 'react'

import ToolBar from './ToolBar/ToolBar'
import NavigationSideList from './Navigation/Navigation'

class Background extends React.Component {
    render() {
        return <div>
            <ToolBar />
            <NavigationSideList/>
        </div>
    }
}

export default Background