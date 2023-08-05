export type Video = {
  items: {
    0: {
      id: string,
      snippet: {
        publishedAt: string,
        title: string,
        thumbnails: {
          url: string,
        },
      },
      channelTitle: string,
    }
  }
}

