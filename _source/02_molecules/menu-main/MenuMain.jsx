import React from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';

export default class MenuMain extends React.Component {
    constructor() {
        super();
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'm-menu-main ' + PROPS.className;

        return (
            <ul className={ CLASS }>
                <Icon className="m-menu-main__item" icon="about" label="About" />
                <Icon className="m-menu-main__item" icon="help" label="Help" />
                <Icon className="m-menu-main__item" icon="next" label="Next" />
            </ul>
        );
    }
}