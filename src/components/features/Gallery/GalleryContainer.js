import { connect } from 'react-redux';
import Gallery from './Gallery';
import { getAllGallery, getActives, setActive } from '../../../redux/galleryRedux';

const mapStateToProps = state => ({
  gallery: getAllGallery(state),
  actives: getActives(state),
});

const mapDispatcherToProps = dispatcher => ({
  setActive: payload => dispatcher(setActive(payload)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Gallery);
