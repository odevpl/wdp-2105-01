/* selectors */
export const getAllGallery = ({ gallery }) => gallery;

export const getActiveBestseller = ({ gallery }) =>
  gallery.filter(item => item.active === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
