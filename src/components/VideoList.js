import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    const renderedList = videos.map(video => (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    ));

    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}
