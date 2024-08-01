import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AspirationThunkProp } from "@/app/types/aspiration.type";
import { UserProps } from "@/app/types/aspiration.type";


interface BookMarkState {
  bookmarked: AspirationThunkProp[];
  error: string | null;
  bookmarkError: string | null;
  user: UserProps | null;
}

const initialState: BookMarkState = {
  bookmarked: [],
  error: null,
  bookmarkError: null,
  user: null,
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addAspirationToBookmarked(state, action: PayloadAction<AspirationThunkProp>) {
      state.bookmarked.unshift(action.payload);
    },
    removeFromBookmarked(state, action: PayloadAction<number>) {
      state.bookmarked = state.bookmarked.filter(
        (aspiration) => aspiration.id !== action.payload
      );
    },
    addBookmarkFail(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    getBookmarkError(state, action: PayloadAction<string>) {
      state.bookmarkError = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    updateBookmarks(state, action: PayloadAction<AspirationThunkProp[]>) {
      state.bookmarked = action.payload;
    },
  },
});

export const {
  addAspirationToBookmarked,
  removeFromBookmarked,
  addBookmarkFail,
  getBookmarkError,
  setUser,
  updateBookmarks,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
