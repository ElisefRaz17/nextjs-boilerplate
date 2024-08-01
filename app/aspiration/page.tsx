"use client";

import React, { useContext, useEffect, useRef } from "react";
import {
  ShowMore,
  type ShowMoreRef,
  type ShowMoreToggleLinesFn,
} from "@re-dev/react-truncate";
import womenInTechnology from "../../../data/aspirations";
import styles from "../../styling/aspiration.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Favorite from "@mui/icons-material/Favorite";
import {
  IconButton,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AspirationContext } from "../../../context/aspiration.provider";

function Page(props: any) {
  const [randomNum, setRandomNum] = React.useState(0);

  const [routeState, setRouteState] = React.useState({});
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { aspiration } = useContext(AspirationContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.focus(); /** used to stop rerendering when Like button is clicked */
  };

  const ref = useRef<ShowMoreRef>(null);
  const toggleLines: ShowMoreToggleLinesFn = (e) => {
    ref.current?.toggleLines(e);
  };

  console.log(aspiration);

  // useEffect(()=>{
  //     setRouteState(myAspiration);
  // },[routeState]);

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
  let engineerIndex = Math.floor(Math.random() * engineeringItems.length);
  let engineer_item = engineeringItems[engineerIndex];

  let designIndex = Math.floor(Math.random() * designItems.length);
  let design_item = designItems[designIndex];

  let softwareIndex = Math.floor(
    Math.random() * softwareEngineeringItems.length
  );
  let software_item = softwareEngineeringItems[softwareIndex];

  let dataIndex = Math.floor(Math.random() * dataScienceItems.length);
  let data_item = dataScienceItems[dataIndex];

  let cyberIndex = Math.floor(Math.random() * cyberSecurityItems.length);
  let cyber_item = cyberSecurityItems[cyberIndex];

  let entrepeneurIndex = Math.floor(
    Math.random() * entrepeneurshipItems.length
  );
  let entrepeneur_item = entrepeneurshipItems[entrepeneurIndex];

  //   }

  //   }

  return (
    <div className={styles.container}>
      {aspiration === "Engineering" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{aspiration}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{engineer_item.details}</p>
              </ShowMore>
            </div>
            {/* <IconButton >{engineeringItems[randomNum].liked ? <FavoriteIcon sx={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>}</IconButton> */}
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p key={engineer_item.id}>About {engineer_item.name}</p>
                <img
                  src={engineer_item.image_path}
                  key={engineer_item.name}
                  alt="engineering image"
                />
                <p className={styles.title}>{engineer_item.category}</p>
                {/* <IconButton onClick={()=>{setLiked(true)}}>{liked ? <FavoriteIcon sx={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>}</IconButton> */}
                <p>
                  Learn more about {engineer_item.name}{" "}
                  <a href={engineer_item.website} id="link">
                    here
                  </a>
                </p>
                <Link href="/dashboard" passHref>
                  <Button
                    onClick={handleClick}
                    className={styles.moreBtn}
                    sx={{ backgroundColor: "#9CB2FF" }}
                    type="button"
                  >
                    View more Engineers
                  </Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {aspiration === "Data Science" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{aspiration}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{data_item.details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p key={data_item.id}>About {data_item.name}</p>
                <img
                  src={data_item.image_path}
                  key={data_item.name}
                  alt="datascience image"
                />
                <p className={styles.title}>{data_item.category}</p>
                <p>
                  Learn more about {data_item.name}{" "}
                  <a href={data_item.website} id="link">
                    here
                  </a>
                </p>
                <Link href="/dashboard" passHref>
                  <Button
                    onClick={handleClick}
                    className={styles.moreBtn}
                    sx={{ backgroundColor: "#9CB2FF" }}
                    type="button"
                  >
                    View more Data Scientists
                  </Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {aspiration === "Software Engineering" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{aspiration}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{software_item.details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p key={software_item.id}>About {software_item.name}</p>
                <img
                  src={software_item.image_path}
                  key={software_item.name}
                  alt="software engineering image"
                />
                <p className={styles.title}>{software_item.category}</p>
                <p>
                  Learn more about {software_item.name}{" "}
                  <a href={software_item.website} id="link">
                    here
                  </a>
                </p>
                <Link href="/dashboard" passHref>
                  <Button
                    onClick={handleClick}
                    className={styles.moreBtn}
                    sx={{ backgroundColor: "#9CB2FF" }}
                    type="button"
                  >
                    View more Software Engineers
                  </Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {aspiration === "Cybersecurity" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{aspiration}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{cyber_item.details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p key={cyber_item.id}>About {cyber_item.name}</p>
                <img
                  src={cyber_item.image_path}
                  key={cyber_item.name}
                  alt="cybersecurity image"
                />
                <p className={styles.title}>{cyber_item.category}</p>
                <p>
                  Learn more about {cyber_item.name}{" "}
                  <a href={cyber_item.website} id="link">
                    here
                  </a>
                </p>
                <Link href="/dashboard" passHref>
                  <Button
                    onClick={handleClick}
                    className={styles.moreBtn}
                    sx={{ backgroundColor: "#9CB2FF" }}
                    type="button"
                  >
                    View more Cybersecurity Specialists
                  </Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {aspiration === "Design" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{aspiration}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{design_item.details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p key={design_item.id}>About {design_item.name}</p>
                <img
                  src={design_item.image_path}
                  key={design_item.name}
                  alt="design image"
                />
                <p className={styles.title}>{design_item.category}</p>
                <p>
                  Learn more about {design_item.name}{" "}
                  <a href={design_item.website} id="link">
                    here
                  </a>
                </p>
                <Link href="/dashboard" passHref>
                  <Button
                    onClick={handleClick}
                    className={styles.moreBtn}
                    sx={{ backgroundColor: "#9CB2FF" }}
                    type="button"
                  >
                    View more Designers
                  </Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}

      {aspiration === "Entrepeneurship" && (
        <>
          <div className={styles.details}>
            <h2 className={styles["area-interest"]}>
              Your Area of Interest: <b>{aspiration}</b>
            </h2>
            <h3>Did you know:</h3>
            <div>
              <ShowMore
                ref={ref}
                lines={3}
                more={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                }
                less={
                  <IconButton
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                    onClick={toggleLines}
                  >
                    <KeyboardArrowUp />
                  </IconButton>
                }
              >
                <p>{entrepeneur_item.details}</p>
              </ShowMore>
            </div>
          </div>
          <Card className={styles.card}>
            <CardContent className={styles["card-content"]}>
              <Typography variant="body2" color="text.seconday">
                <p key={entrepeneur_item.id}>About {entrepeneur_item.name}</p>
                <img
                  src={entrepeneur_item.image_path}
                  key={entrepeneur_item.name}
                  alt="entrepeneurship image"
                />
                <p className={styles.title}>{entrepeneur_item.category}</p>
                <p>
                  Learn more about {entrepeneur_item.name}{" "}
                  <a href={entrepeneur_item.website} id="link">
                    here
                  </a>
                </p>
                <Link href="/dashboard" passHref>
                  <Button
                    onClick={handleClick}
                    className={styles.moreBtn}
                    sx={{ backgroundColor: "#9CB2FF" }}
                    type="button"
                  >
                    View more Entrepeneurs
                  </Button>
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
      {/* )} */}
    </div>
  );
}

export default Page;
