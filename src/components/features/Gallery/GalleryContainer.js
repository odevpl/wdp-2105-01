import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getAllGallery } from '../../../redux/galleryRedux';

const mapStateToProps = state => ({
  gallery: getAllGallery(state),
});

export default connect(mapStateToProps)(Gallery);
