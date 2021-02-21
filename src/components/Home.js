import React, { Component, Fragment } from 'react';
import { connect } from 'dva';

class Home extends Component {
    render() {
        return (
            <Fragment>
                home hhhh {this.props.num}
                <button onClick={() => this.props.dispatch({ type: 'index/changeNum', payload: { num: 10 } })}>点击更改</button>
            </Fragment>
        )
    }
}

export default connect(state => {
    return {
        num: state.index.num
    }
})(Home)