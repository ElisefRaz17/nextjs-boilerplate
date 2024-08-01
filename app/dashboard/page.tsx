"use client";

import { useContext, useEffect } from 'react';
import womenInTechnology from '../../../data/aspirations';
import { useAppSelector } from "../../../redux/hooks";
import AspirationCard from "../components/AspirationCard";
import AnimatedWrapper from "../components/AnimationWrapper";
import { getBookmarksFromFirebaseDB } from "../../../redux/features/bookmarkThunk";
import { useAppDispatch } from '../../../redux/hooks';
import { AspirationContext } from '../../../context/aspiration.provider';


export default function Home() {
  const user: any = useAppSelector((state) => state.bookmark.user);
  const dispatch = useAppDispatch();
  const {aspiration} = useContext(AspirationContext);

  const engineeringItems = womenInTechnology.filter(
    (item) => item.category === "Engineering"
  );
  const dataScienceItems = womenInTechnology.filter(
    (item) => item.category === "Data Science"
  );
  const softwareEngineeringItems = womenInTechnology.filter(
    (item) => item.category === "Software Engineering"
  );
  const designItems = womenInTechnology.filter(
    (item) => item.category === "Design"
  );
  const cyberSecurityItems = womenInTechnology.filter(
    (item) => item.category === "Cybersecurity"
  );
  const entrepeneurshipItems = womenInTechnology.filter(
    (item) => item.category === "Entrepeneurship"
  );

  //   function getRandomAspiration(engineeringItems:[]){

 
//  if (aspiration == 'Engineering') {
    let engineerIndex= Math.floor(Math.random() * engineeringItems.length);
     let engineer_item = engineeringItems[engineerIndex];

     let designIndex = Math.floor(Math.random() * designItems.length);
     let design_item = designItems[designIndex];

     let softwareIndex = Math.floor(Math.random() * softwareEngineeringItems.length);
     let software_item = softwareEngineeringItems[softwareIndex];

     let dataIndex = Math.floor(Math.random() * dataScienceItems.length);
     let data_item = dataScienceItems[dataIndex];

     let cyberIndex = Math.floor(Math.random() * cyberSecurityItems.length);
     let cyber_item = cyberSecurityItems[cyberIndex];

     let entrepeneurIndex = Math.floor(Math.random() * entrepeneurshipItems.length);
     let entrepeneur_item = entrepeneurshipItems[entrepeneurIndex];

  useEffect(() => {
    dispatch(getBookmarksFromFirebaseDB());
  }, [dispatch])

  return (
    <>
    <div className='h-auto flex flex-col items-center justify-center px-4 py-4'>
        <AnimatedWrapper>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1 gap-3 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
            {womenInTechnology.map((item) => {
              return (
                <div key={item?.id}>
                  <AspirationCard
                    name={item?.name as string}
                    aspirationId={item?.id as number}
                    image_path={item?.image_path as string}
                    description={item?.details as string}
                    role={item?.category as string}
                    user={user} 
                    website={item?.website as string}/>
                </div>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>
      {aspiration === "Engineering" && <div className='h-auto flex flex-col items-center justify-center px-4 py-4'>
        <AnimatedWrapper>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1 gap-3 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
            {engineeringItems.map((item) => {
              return (
                <div key={item?.id}>
                  <AspirationCard
                    name={item?.name as string}
                    aspirationId={item?.id as number}
                    image_path={item?.image_path as string}
                    description={item?.details as string}
                    role={item?.category as string}
                    user={user} 
                    website={item?.website as string}/>
                </div>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>}

      {aspiration === "Software Engineering" && <div className='h-auto flex flex-col items-center justify-center px-4 py-4'>
        <AnimatedWrapper>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1 gap-3 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
            {softwareEngineeringItems.map((item) => {
              return (
                <div key={item?.id}>
                  <AspirationCard
                    name={item?.name as string}
                    aspirationId={item?.id as number}
                    image_path={item?.image_path as string}
                    description={item?.details as string}
                    role={item?.category as string}
                    user={user} 
                    website={item?.website as string}/>
                </div>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>}
      {aspiration === "Design" && <div className='h-auto flex flex-col items-center justify-center px-4 py-4'>
        <AnimatedWrapper>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1 gap-3 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
            {designItems.map((item) => {
              return (
                <div key={item?.id}>
                  <AspirationCard
                    name={item?.name as string}
                    aspirationId={item?.id as number}
                    image_path={item?.image_path as string}
                    description={item?.details as string}
                    role={item?.category as string}
                    user={user} 
                    website={item?.website as string}/>
                </div>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>}
      {aspiration === "Cybersecurity" && <div className='h-auto flex flex-col items-center justify-center px-4 py-4'>
        <AnimatedWrapper>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1 gap-3 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
            {cyberSecurityItems.map((item) => {
              return (
                <div key={item?.id}>
                  <AspirationCard
                    name={item?.name as string}
                    aspirationId={item?.id as number}
                    image_path={item?.image_path as string}
                    description={item?.details as string}
                    role={item?.category as string}
                    user={user} 
                    website={item?.website as string}/>
                </div>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>}
      {aspiration === "Entrepeneurship" && <div className='h-auto flex flex-col items-center justify-center px-4 py-4'>
        <AnimatedWrapper>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1 gap-3 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
            {entrepeneurshipItems.map((item) => {
              return (
                <div key={item?.id}>
                  <AspirationCard
                    name={item?.name as string}
                    aspirationId={item?.id as number}
                    image_path={item?.image_path as string}
                    description={item?.details as string}
                    role={item?.category as string}
                    user={user} 
                    website={item?.website as string}/>
                </div>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>}
      {aspiration === "Data Science" && <div className='h-auto flex flex-col items-center justify-center px-4 py-4'>
        <AnimatedWrapper>
          <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 max-sm:grid-cols-1 gap-3 items-center max-sm:flex max-sm:justify-center max-sm:flex-col'>
            {dataScienceItems.map((item) => {
              return (
                <div key={item?.id}>
                  <AspirationCard
                    name={item?.name as string}
                    aspirationId={item?.id as number}
                    image_path={item?.image_path as string}
                    description={item?.details as string}
                    role={item?.category as string}
                    user={user} 
                    website={item?.website as string}/>
                </div>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>}
    </>
  );
}
