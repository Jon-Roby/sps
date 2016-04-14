import { combineReducers } from 'redux';
import AlbumsReducer from './reducer_albums';
import ActiveAlbum from './reducer_active_album';

const rootReducer = combineReducers({
  albums: AlbumsReducer,
  activeAlbum: ActiveAlbum
});

export default rootReducer;
