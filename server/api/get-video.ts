import axios from 'axios';
import { Video } from '../../models/youtube'

export default defineEventHandler(async (event): Promise<Video | unknown> => {
  const config = useRuntimeConfig();

  const params = {
    part: 'snippet',
    id: 'Ks-_Mh1QhMc',
    key: config.youtubeApiKey
  }

  console.log(getRequestURL(event).searchParams.get('videoId'));

  // try {
  //   const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
  //     params
  //   })
  //   return response.data;
  // } catch (error) {
  //   return error;
  // }
})
