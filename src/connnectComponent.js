import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

const options = {
  withRef: true
};

export default ({ mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponent }) => connect(
    mapStateToProps || function(state) {
      return {};
    },
    mapDispatchToProps || function(dispatch) {
      return {
        actions: bindActionCreators(actions, dispatch)
      };
    },
    mergeProps,
    options
  )(LayoutComponent);
