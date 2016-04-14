import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectAlbum } from '../actions/index';
import { getAlbums } from '../actions/index';
import { bindActionCreators } from 'redux';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;






class AlbumList extends Component {
  renderList() {
    console.log("this.props for ALbumList ", this.props);
    if (!this.props.albums) {
      return <div>You need to be logged in to view albums</div>
    }
    return this.props.albums.map((album) => {

      return (
        <Tab
          key={album.id}
          label={album.name}
          onClick={() => {this.props.selectAlbum(album)}}>
          </Tab>
      );
    });
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <Tabs>
        {this.renderList()}
      </Tabs>
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
