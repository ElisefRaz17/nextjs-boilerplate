import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AspirationThunkProp } from "../../types/aspiration.type";
import {
  setDoc,
  deleteDoc,
  collection,
  getDoc,
  doc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import {
  addBookmarkFail,
  addAspirationToBookmarked,
  getBookmarkError,
  removeFromBookmarked,
  updateBookmarks,
} from "./bookmarkSlice";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";

export const notifySuccess = (message: string) => toast.success(message);
export const notifyError = (message: string) => toast.error(message);

//user logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

//Google sign-in
export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
  const googleAuthProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleAuthProvider);
});

//add aspirations bookmarks
export const addAspirationToBookmarkedDB = createAsyncThunk(
  "bookmark/addAspirationToBookmarked",
  async (aspiration: AspirationThunkProp, { dispatch, getState }) => {
    const state = getState() as RootState;
    const user = state.bookmark.user;
    const aspirationId = aspiration.id.toString();
    const { image_path, id, name, description,role,userId} = aspiration;
    
    try {
      const bookmarkedItemRef = doc(db, `${user?.uid as string}`, aspirationId);
      const docSnap = await getDoc(bookmarkedItemRef);

      if (docSnap.exists()) {
        const existItem = docSnap.data();
        dispatch(
          addBookmarkFail(existItem.title + " already an existing item")
        );
      } else {
        notifySuccess(`adding ${name} to bookmarks`);
        await setDoc(doc(db, "favoritesCollection", aspirationId), {
          image_path,
          role,
          id,
          name,
          description,
          userId:user?.uid
          // `${user?.uid as string}`
        });
        notifySuccess(`${name} has been successfully added`);
        dispatch(addAspirationToBookmarked(aspiration));
      }
    } catch (error: any) {
      notifyError(`failed to add  ${name}  ${error}`);
      dispatch(
        addBookmarkFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : "Failed to add " + name + ": " + error.message
        )
      );
    }
  }
);

//remove aspirations from bookmarks
export const removeAspirationFromBookmarks = createAsyncThunk(
  "bookmark/removeAspirationFromBookmarks",
  async (id: number, { dispatch, getState }) => {
    const state = getState() as RootState;
    const user = state.bookmark.user;
    const aspirationId = id.toString();
    try {
      dispatch(removeFromBookmarked(id));
      await deleteDoc(doc(db, `favoritesCollection`, aspirationId));
      notifySuccess(`Aspiration Id: ${id} was successfully deleted`);
    } catch (error: any) {
      notifyError(`failed to remove  ${id}`);
      dispatch({
        type: "ADD_BOOKMARK_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
);

//retrieve all bookmarked aspirations
export const getBookmarksFromFirebaseDB = createAsyncThunk(
  "bookmark/getBookmarksFromFirebaseDB",
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const user = state.bookmark.user;
    const getBookmarkItems = async (db: any) => {
      const bookmarkCol = query(collection(db, `favoritesCollection`),where("userId", "==", user?.uid));
      const bookmarkSnapshot = await getDocs(bookmarkCol);
      const bookmarkList = bookmarkSnapshot.docs.map(
        (doc) => doc.data() as AspirationThunkProp
      );
      return bookmarkList;
    };
    try {
      let allBookmarks = await getBookmarkItems(db);
      dispatch(updateBookmarks(allBookmarks));
    } catch (error: any) {
      dispatch(
        getBookmarkError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  }
);

