import { connect } from 'react-redux';

import { openModal } from '../../../_state/modal/actions';
import {
  newSubscription,
  updateSubscription,
  cancelSubscription
} from '../../../_state/subscription/actions';
import Component from './AccountSupporter';

const mapStateToProps = (state) => ({
  isPremium: state.user.premium,
  supportAmount: state.user.supportAmount
});
const mapDispatchToProps = {
  openModal,
  newSubscription,
  updateSubscription,
  cancelSubscription
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
