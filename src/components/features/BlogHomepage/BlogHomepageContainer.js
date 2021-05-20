import { connect } from 'react-redux';
import BlogHomepage from './BlogHomepage';
import { getAllPosts } from '../../../redux/blogPostsRedux';

const mapStateToProps = state => ({
  blogPosts: getAllPosts(state),
});

export default connect(mapStateToProps)(BlogHomepage);
