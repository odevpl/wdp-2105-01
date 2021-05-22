import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getAllGallery, getActiveBestseller } from '../../../redux/galleryRedux';

const mapStateToProps = state => ({
  gallery: getAllGallery(state),
  getActiveBestseller: getActiveBestseller(state),
});

export default connect(mapStateToProps)(Gallery);
