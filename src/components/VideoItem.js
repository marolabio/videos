import React, { Component } from "react";
import "./VideoItem.css";
export default class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <div onClick={() => onVideoSelect(video)} className="item video-item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />

        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
