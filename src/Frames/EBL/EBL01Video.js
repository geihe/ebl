import React from 'react';
import {FlexZone} from "../../MicroComponents/FlexZone";
import introductionVideo from "../../assets/introduction.mp4"
import {Video} from "../../MicroComponents/Video";

export function EBL01Video(props) {
  const {videoID} = props;
  const urls = {
    introduction: introductionVideo
  };
  const videoUrl = urls[videoID];


  return (
    <FlexZone column style={{height: '500px', width: '800px'}}>
      <Video url={videoUrl} callback={() => props.finish(videoUrl)}/>
    </FlexZone>
  );
}