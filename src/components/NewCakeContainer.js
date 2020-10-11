import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { buyCake } from '../redux';

const CakeContainer = (props) => {
    const [number, setNumber] = React.useState('');
    return (
        <Fragment>

            <h2>
                Number of Cakes - {props.numOfCakes}
            </h2>
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake </button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}


export default connect(mapStatesToProps, mapDispatchToProps)(CakeContainer);