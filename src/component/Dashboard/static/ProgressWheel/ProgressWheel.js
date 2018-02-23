import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

function ProgressWheel({marginTop, marginLeft}) {
    let progressWheelStyle = {
        marginTop: marginTop,
        marginLeft: marginLeft
    };

    return <div>
        <CircularProgress size={80} thickness={5} style={progressWheelStyle}/>
    </div>
}

export default ProgressWheel;