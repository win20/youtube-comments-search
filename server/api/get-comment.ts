import axios from 'axios';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const commentSearch = getRequestURL(event).searchParams.get('commentSearch');
  const videoId = getRequestURL(event).searchParams.get('videoId');

  const params = {
    part: 'snippet',
    videoId: videoId,
    searchTerms: commentSearch,
    key: config.youtubeApiKey
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
      params
    })
    return response.data;
  } catch (error) {
    return error;
  }
})
