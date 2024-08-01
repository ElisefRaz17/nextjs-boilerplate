/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  addAspirationToBookmarkedDB,
  removeAspirationFromBookmarks,
} from "../../../redux/features/bookmarkThunk";
import { AspirationCardProps} from "../../../types/aspiration.type";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { Toaster } from "react-hot-toast";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Image from "next/image";
import generalAvatar from "../../../public/generalAvatar.png";
import { Button } from "@mui/material";
export default function AspirationCard({
  aspirationId,
  role,
  name,
  image_path,
  description,
  user,
  website
}: AspirationCardProps) {
  // const imagePath = "https://image.tmdb.org/t/p/original";
  const [exists, setExists] = useState(false);
  const bookmarks = useAppSelector((state) => state.bookmark.bookmarked);
  const dispatch = useAppDispatch();

  const aspirationData = {
    description:description,
    role: role,
    image_path: image_path,
    id: aspirationId,
    name:name,
    website:website
  };

  const checkIfItemExists = async () => {
    const bookmarkCol = collection(db, `${user?.uid as string}`);
    const bookmarkSnapshot = await getDocs(bookmarkCol);
    const bookmarkList = bookmarkSnapshot.docs.map((doc) => doc.data());
    const itemExists = bookmarkList.some((item) => item.id === aspirationId);
    setExists(itemExists);
  };

  const handleAddToBookmark = (aspiration: any) => {
    try {
      if (user) {
        dispatch(addAspirationToBookmarkedDB(aspiration));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveAspirationFromBookmark = (id: number) => {
    if (user) {
      dispatch(removeAspirationFromBookmarks(id));
    }
  };

  useEffect(() => {
    checkIfItemExists();
  }, [exists, bookmarks]);

  return (
    <div className='w-fit mt-[20px]'>
      <Toaster />
      <div className='w-[250px]'>
        <Image
          src={image_path}
          alt={name || "unknown"}
          className='h-[350px] w-[250px] max-sm:w-[350px] bg-stone-300 transition ease-in-out cursor-pointer hover:brightness-50'
          loading='lazy'
          width={500}
          height={500}
          // blurDataURL={imagePath + backdrop_path}
          // placeholder='blur'
        />
        <section className='flex items-center justify-between'>
          <div className='block'>
            <h1 className='mt-3 text-sm text-black font-semibold tracking-tight'>
              {name}
            </h1>
            <p className='text-sm flex gap-3 text-black font-normal mt-1'>
              <span style={{ fontSize: "16px" }}>
                {/* {aspirationRating?.toFixed(1)} */}
                Learn about her <a href={website}>here</a>
              </span>
            </p>
          </div>
          <Button
            className='px-3 py-2 text-blue-500 rounded-full hover:text-blue-400'
            onClick={() => {
              if (exists) {
                handleRemoveAspirationFromBookmark(aspirationId);
              } else {
                handleAddToBookmark(aspirationData);
              }
            }}
          >
            {exists ? (
              <FavoriteIcon
                style={{ fontSize: "20px" }}
                className='text-red-400  cursor-pointer'
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                style={{ fontSize: "20px" }}
                className='text-black cursor-pointer'
              />
            )}
          </Button>
        </section>
      </div>
    </div>
  );
}
