import { defineStore } from "pinia";
import { CommentsList } from "~/models/youtube";

export const useCommentsStore = defineStore('commentsStore', () => {
  let comments = reactive<CommentsList>([]);

  const storeComments = (commentsList: CommentsList) => {
    localStorage.removeItem('comments');
    comments = [];

    for (const comment of commentsList) {
      comments.push(comment);
    }

    localStorage.setItem('comments', JSON.stringify(comments));
  };

  const getCommentsFromLocalStorage = () => {
    const localStorageComments = localStorage.getItem('comments')

    return localStorageComments ? JSON.parse(localStorageComments) : '';
  }

  return { comments, storeComments, getCommentsFromLocalStorage };
});