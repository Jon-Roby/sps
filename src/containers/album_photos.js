import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from 'material-ui/lib/card/card';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

class AlbumPhotos extends Component {
  renderPhoto(photo) {
    console.log(photo);
    return (
      <GridTile
        key={photo.source}
        title={photo.source}
        subtitle={<span>by <b>Blah</b></span>}
        actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
      >
        <img src={photo.source} />
      </GridTile>
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
        <div style={styles.root}>
          <GridList
            cellHeight={200}
            style={styles.gridList}>
            { this.props.album.map(this.renderPhoto) }
          </GridList>
        </div>
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
