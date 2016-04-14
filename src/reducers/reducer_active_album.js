export default function(state = null, action) {
  switch (action.type) {
    case 'ALBUM_SELECTED':
      console.log("action ", action.payload.data.data);

      var res = action.payload.data.data.map((image) => {
        return image.images.pop();

      })
      console.log("res ", res);
      return res;
  }

  return state;
}
