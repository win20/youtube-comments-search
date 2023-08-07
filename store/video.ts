import { defineStore } from "pinia";
import { Video } from "~/models/youtube";

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
    let views = parseInt(searchedVideo.items[0].statistics.viewCount);

    video.id = searchedVideo.items[0].id;
    video.title = searchedVideo.items[0].snippet.title;
    video.views = formatCompactNumber(views);
    video.channel = searchedVideo.items[0].snippet.channelTitle;
    video.publishedAt = searchedVideo.items[0].snippet.publishedAt;
    video.thumbnailUrl = searchedVideo.items[0].snippet.thumbnails.standard.url;

    localStorage.setItem('video', JSON.stringify(video));
  };

  const getVideoFromLocalStorage = () => {
    const localStorageVideo = localStorage.getItem('video')

    return localStorageVideo ? JSON.parse(localStorageVideo) : '';
  }

  const formatCompactNumber = (number: number): string => {
    if (number < 1000) {
      return number.toString();
    } else if (number >= 1000 && number < 1_000_000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
      return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(1) + "T";
    }

    return '';
  }

  return { video, storeVideo, getVideoFromLocalStorage };
});
