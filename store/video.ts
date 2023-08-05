import { defineStore } from "pinia";
import { Video } from "models/youtube";

export const useVideoStore = defineStore('videoStore', () => {
  const video = reactive({
    id: '',
    title: '',
    channel: '',
    views: '',
    publishedAt: '',
    thumbnailUrl: '',
  });

  const storeVideo = (searchedVideo: Video) => {
    video.id = searchedVideo.items[0].id;
    video.title = searchedVideo.items[0].snippet.title;
    video.channel = searchedVideo.items[0].channelTitle;
    video.publishedAt = searchedVideo.items[0].snippet.publishedAt;
    video.thumbnailUrl = searchedVideo.items[0].snippet.thumbnails.url;
  };

  return { video, storeVideo };
});
