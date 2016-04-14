export default function(state = null, action) {
  switch (action.type) {
    case 'GET_ALBUMS':
      var res = action.payload.data.albums.data;
      return res;
  }
  return state;
}
