import React from 'react';
import {FlexZone} from "../../MicroComponents/FlexZone";
import {Video} from "../../MicroComponents/Video";
import introductionVideo from "../../assets/introduction.mp4"
import constrastVideo from "../../assets/Beispielvideo_Unterschiede_V3.mp4"
import similarityVideo from "../../assets/Beispielvideo_Unterschiede_V3.mp4"

export function EBL01Video(props) {
  const {videoID} = props;
  const urls = {
    introduction: introductionVideo,
    contrast: constrastVideo,
    similarity: similarityVideo
  };
  const videoUrl = urls[videoID];


  return (
    <FlexZone column style={{width: '90%'}}>
      <Video url={videoUrl} callback={() => props.finish(videoUrl)}/>
    </FlexZone>
  );
}