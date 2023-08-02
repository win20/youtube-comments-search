export type Video = {
  items: {
    0: {
      id: string,
      snippet: {
        publisheAt: string,
        title: string,
        thumbnails: {
          url: string,
        },
      },
      channelTitle: string,
    }
  }
}

