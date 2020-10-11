import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { buyCake } from '../redux';

const CakeContainer = (props) => {
    return (
        <Fragment>

            <h2>
                Number of Cakes - {props.numOfCakes}
            </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </Fragment>
    );
}

const mapStatesToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStatesToProps, mapDispatchToProps)(CakeContainer);