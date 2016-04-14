import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlbumPhotos extends Component {
  renderPhoto(photo) {
    console.log(photo);
    return (
      <div>
        <img src={photo.source} />
      </div>
    )
  }


  render() {
    console.log("this.props.album ", this.props.album);
    if (!this.props.album) {
      return (
        <div>
          <div>Album Photos</div>
          <div>Select an album to get started.</div>
        </div>
      )
    }
    return (
      <div>
        <div>Album Photos</div>
        { this.props.album.map(this.renderPhoto) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    album: state.activeAlbum
  }
}

export default connect(mapStateToProps)(AlbumPhotos);
