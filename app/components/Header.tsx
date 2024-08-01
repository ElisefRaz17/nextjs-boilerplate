"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { googleSignIn } from "@/redux/features/bookmarkThunk";
import { setUser } from "@/redux/features/bookmarkSlice";
import { usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { getBookmarksFromFirebaseDB, logout } from "@/redux/features/bookmarkThunk";
import { auth } from "@/firebase.config";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import Link from "next/link";
import Logo from "./../Logo.png";
import styles from "../../styling/navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Button, Tooltip } from "@mui/material";

const Header = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const user: any = useAppSelector((state) => state.bookmark.user);
  const bookmarkedAspirations = useAppSelector(
    (state) => state.bookmark.bookmarked
  );
  const [firebaseError, setFirebaseError] = useState<string>("");

  const handleGoogleSignIn = async () => {
    try {
      await dispatch(googleSignIn());
    } catch (error: any) {
      setFirebaseError(error.message);
    }
  };

  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (error: any) {
      setFirebaseError(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      dispatch(setUser(currentUser));
    });
    dispatch(getBookmarksFromFirebaseDB());

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const length = bookmarkedAspirations.length;

  return (
    <div
      className="flex px-4 py-4 items-center let-900 justify-between pattern-dots pattern-indigo-500 pattern-bg-orange-100
  pattern-size-2 pattern-opacity-20 opacity-100"
    >
      {firebaseError && (
        <h3 className="text-red-600 bg-red-100 px-2 py-2 rounded-md text-sm w-[20em]">
          {firebaseError}
        </h3>
      )}
      <Link href="/" passHref>
        <Image
          src={Logo}
          height={70}
          width={90}
          style={{
            justifyContent: "center",
            display: "flex",
            paddingTop: "10px",
          }}
          alt="logo"
        />
      </Link>
      <div className="flex gap-3">
        <Link href="/about" className="text-black" passHref>
          <Button variant="contained" className="px-3 py-2 bg-green-200"               sx={{
                ":hover": {
                  bgcolor: "darkgreen",
                  color: "white",
                },
              }}>
            <Tooltip title="About Page">
              <InfoOutlinedIcon sx={{ color: "black" }} />
            </Tooltip>
          </Button>
        </Link>
        <Link href="/dashboard" className="text-white" passHref>
          <Button variant="contained" className="px-3 py-2 bg-blue-300"               sx={{
                ":hover": {
                  bgcolor: "darkorchid",
                  color: "white",
                },
              }}>
            <Tooltip title="Dashboard">
              <DashboardIcon />
            </Tooltip>
          </Button>
        </Link>
        <Button
          className="px-3 py-2 bg-pink-500 text-sm text-white rounded-full"
          sx={{
            ":hover": {
              bgcolor: "deeppink",
              color: "white",
            },
          }}
          onClick={user ? handleLogout : handleGoogleSignIn}
        >
          {user ? "Sign out" : "Sign in"}
        </Button>
        {user && (
          <Image
            src={user?.photoURL ? user?.photoURL : ""}
            alt={user?.email ? user?.email : ""}
            width={500}
            height={500}
            className="w-[30px] h-[30px] rounded-full text-white via-cyan-900 to-stone-500 bg-gradient-to-r max-sm:cursor-pointer"
            data-cy="user-profile-image"
            priority
          />
        )}

        <Link href="/bookmarks">
        <Tooltip title="Favorites">
            <Button variant="contained"
              className={`${
                pathname === "/bookmarked"
                  ? "text-red-400 font-semibold"
                  : "text-white"
              } block relative bg-indigo-400 bg-cover`}
              sx={{
                ":hover": {
                  bgcolor: "darkviolet",
                  color: "white",
                },
              }}
              data-cy="bookmark-icon"
            >
              {/*  */}
              <FavoriteBorderOutlinedIcon />
              {length && (
                <span className="absolute -top-[8px] -right-[10px] w-5 h-5 bg-white rounded-full flex items-center font-normal justify-center text-black text-xs">
                  {user ? `${length}` : "0"}
                </span>
              )}
            </Button>
            {/* <Tooltip title="Favorites">
              
              <Button variant="contained" className="bg-indigo-400 bg-cover">
                <FavoriteBorderOutlinedIcon />
              </Button>

              */}
              </Tooltip> 
      
        </Link>
      </div>
    </div>
  );
};
export default Header;
