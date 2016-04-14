import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectAlbum } from '../actions/index';
import { getAlbums } from '../actions/index';
import { bindActionCreators } from 'redux';


class AlbumList extends Component {
  renderList() {
    console.log("this.props for ALbumList ", this.props);
    if (!this.props.albums) {
      return <div>You need to be logged in to view albums</div>
    }
    return this.props.albums.map((album) => {

      return (
        <li
          key={album.id}
          onClick={() => {this.props.selectAlbum(album)}}>
          {album.name}</li>
      );
    });
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectAlbum: selectAlbum, getAlbums: getAlbums}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
