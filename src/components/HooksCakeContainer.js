import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { buyCake } from '../redux';

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </Fragment>
    );
}

export default HooksCakeContainer;