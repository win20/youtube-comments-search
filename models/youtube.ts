export type Video = {
  items: {
    0: {
      id: string,
      snippet: {
        publishedAt: string,
        title: string,
        channelTitle: string,
        thumbnails: {
          standard: {
            url: string
          }
        },
      },
      statistics: {
        commentCount: string,
        likeCount: string,
        viewCount: string,
      },
    }
  }
};

export type LocalStorageVideo = {
  id: string,
  title: string,
  channel: string,
  views: string,
  publishedAt: string,
  thumbnailUrl: string,
};

type Comment = {
  id: string,
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string,
        authorProfileImageUrl: string,
        textDisplay: string
      }
    }
  },
};

export type CommentsList = Array<Comment>;
