import { connect } from 'react-redux';

import Component from './Shared';
import { getDashboard } from '../../_state/dashboards/actions';

const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items || []
});
const mapDispatchToProps = {
  getDashboard
};
const SharedContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default SharedContainer;
