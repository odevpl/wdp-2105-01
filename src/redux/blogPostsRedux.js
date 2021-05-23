/* selectors */
export const getAllPosts = ({ blogPosts }) => blogPosts;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
