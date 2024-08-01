"use client";

import { useState, useEffect } from "react";
import {useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
  getBookmarksFromFirebaseDB,
  removeAspirationFromBookmarks,
} from "../../../redux/features/bookmarkThunk";
import { Toaster } from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import AnimatedWrapper from "../components/AnimationWrapper";
import Image from "next/image";
import { Button } from "@mui/material";


const Bookmark = () => {
  // const imagePath = "https://image.tmdb.org/t/p/original";
  const bookmarkedAspirations = useAppSelector((state) => state.bookmark.bookmarked);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookmarksFromFirebaseDB());
  }, [dispatch]);



  return (
    <AnimatedWrapper>
      <div className='flex flex-col items-center justify-center px-6 py-6 w-[100vw] overflow-x-hidden'>
        <Toaster />
        <h1 className='font-semibold mb-[20px] text-black'>My Bookmarks</h1>
        <div>
          {bookmarkedAspirations?.length === 0 ? (
            <h2>Sorry no bookmarks :(</h2>
          ) : (
            <>
              <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
                {bookmarkedAspirations?.map((aspiration: any) => (
                  <div key={aspiration?.id} className='w-[250px]'>
                    <Image
                      src={ aspiration?.image_path}
                      alt={`${aspiration?.name || ""}`}
                      className='h-[350px] w-[250px] bg-stone-300 transition ease-in-out cursor-pointer hover:brightness-50'
                      loading='lazy'
                      width={500}
                      height={500}
                      // blurDataURL={imagePath + movie?.poster_path}
                      // placeholder='blur'
                    />
                    <div className='flex gap-2 relative -mt-[20em] float-right px-2'>
                      <Button
                        title='bookmark movie'
                        className={`text-xs bg-white text-slate-500 px-3 py-3 hover:scale-110 transition ease-in-out rounded-full`}
                        onClick={() =>
                          dispatch(removeAspirationFromBookmarks(aspiration?.id))
                        }
                      >
                        <DeleteIcon className='text-red-500' />
                      </Button>
                    </div>
                    <h1 className='mt-3 text-sm text-black font-semibold tracking-tight'>
                      {aspiration?.name}
                    </h1>
                    <p className='text-black font-normal mt-1'>
                      <span>{aspiration?.website} Learn more here</span>
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Bookmark;
