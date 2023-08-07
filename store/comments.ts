import { defineStore } from "pinia";
import { CommentsList } from "~/models/youtube";

export const useCommentsStore = defineStore('commentsStore', () => {
  const comments = reactive<CommentsList>([]);

  const storeComments = (commentsList: CommentsList) => {
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