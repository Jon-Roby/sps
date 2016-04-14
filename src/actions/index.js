import axios from 'axios';

import {access_token} from './keys';

export function selectAlbum(album) {
  let response = axios.get(`https://graph.facebook.com/${album.id}/photos?fields=images&access_token=${access_token}`)
  return {
    type: 'ALBUM_SELECTED',
    payload: response
  }
}

export function getLoginStatus() {
  var response = new Promise((resolve, fail) => {
    FB.getLoginStatus((res) => {
      console.log("res ", res);
      // user_id = res.authResponse.userId;
      // access_token = res.authResponse.accessToken;
      resolve(res)
    });
  });

  return {
    type: "GET_LOGIN_STATUS",
    payload: response
  }
}

export function getAlbums() {
  // console.log("from get albums", access_token);
  // console.log(user_id);
  let response = axios.get(`https://graph.facebook.com/119513505116545?fields=albums&access_token=${access_token}`);
  return {
    type: "GET_ALBUMS",
    payload: response
  }
}
