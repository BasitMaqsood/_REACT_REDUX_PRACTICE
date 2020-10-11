import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { buyIcecream } from '../redux';

const IceCreamContainer = (props) => {
    return (
        <Fragment>

            <h2>
                Number of IceCreams - {props.noOfIcecreams}
            </h2>
            <button onClick={props.buyIcecream}>Buy IceCreams</button>
        </Fragment>
    );
}

const mapStatesToProps = state => {
    return {
        noOfIcecreams: state.iceCream.noOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}


export default connect(mapStatesToProps, mapDispatchToProps)(IceCreamContainer);