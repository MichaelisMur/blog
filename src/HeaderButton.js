import React from 'react';
import {Link} from 'react-router-dom';

const HeaderButton = (props) => {
    return(
        <Link to={props.destination}>
            <div className="headerPart"
                onMouseOver={props.mouseOver}
                onMouseOut={props.mouseOut}
            >
                {props.title}
                <div className="headerLine"></div>
            </div>
        </Link>
    )
}

export default HeaderButton;