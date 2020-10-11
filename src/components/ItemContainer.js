import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from '../redux';

const ItemContainer = (props) => {
    return (
        <Fragment>
            <h4>Item - {props.item}</h4>
            <button onClick={props.buyItem}> Buy Items </button>
        </Fragment>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ?
        state.cake.numOfCakes : state.iceCream.noOfIcecreams;

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispachFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIcecream())

    return {
        buyItem: dispachFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);