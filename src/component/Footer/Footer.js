import React from 'react';

import './footer.css'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="footer">
            <span>Copyrights © {date}. Smart Solution. All Rights Reserved.</span>
        </div>
    )
}

export default Footer