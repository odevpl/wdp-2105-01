import { connect } from 'react-redux';
import Feedbacks from './Feedbacks';
import { getAllFeedbacks } from '../../../redux/feedbacksRedux';

const mapStateToProps = state => ({
  feedbacks: getAllFeedbacks(state),
});

export default connect(mapStateToProps)(Feedbacks);
