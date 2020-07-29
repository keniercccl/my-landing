import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Breadcrumb } from 'antd';

class Wrapper extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }


    render() {
        return (
            <div>
                <div className ="wrapp"> 
                    <div className = "navbar">
                        <nav> HERE MENU</nav>
                    </div>

                    <div className = "miniWrapper">

                    </div>
                </div>
            </div>
        );
    }
}

Wrapper.propTypes = {

};

export default Wrapper;