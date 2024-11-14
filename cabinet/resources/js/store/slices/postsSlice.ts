import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '@/types';

interface PostsState {
  posts: PostType[];
  currentPostIndex: number;
  currentPost: PostType | null;
}

const initialState: PostsState = {
  posts: [],
  currentPostIndex: 0,
  currentPost: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
      state.currentPost = action.payload[state.currentPostIndex] || null;
    },
    setCurrentPostIndex: (state, action: PayloadAction<number>) => {
      state.currentPostIndex = action.payload;
      state.currentPost = state.posts[action.payload] || null;
    },
    nextPost: (state) => {
      if (state.currentPostIndex < state.posts.length - 1) {
        state.currentPostIndex += 1;
        state.currentPost = state.posts[state.currentPostIndex];
      }
    },
    prevPost: (state) => {
      if (state.currentPostIndex > 0) {
        state.currentPostIndex -= 1;
        state.currentPost = state.posts[state.currentPostIndex];
      }
    }
  }
});

export const { setPosts, setCurrentPostIndex, nextPost, prevPost } = postsSlice.actions;
export default postsSlice.reducer;