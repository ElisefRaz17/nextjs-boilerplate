import React from "react";
import SecondaryLogo from "../../assets/I (2).png";
import Image from "next/image";
import styles from "../../styling/about.module.css";
import CreatorImg from "../../assets/CurrentHeadshot - Copy.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function page() {
  return (
    <div>
      <div className="text-5xl flex flex-row py-3 px-24 w-full">
        <h1>About Page</h1>
      </div>
      <span className={styles["app-about"]}>
        <h1 className="text-3xl italic py-5 px-12 w-9/12">
          I Can Be Her Origin Story ....
        </h1>
        <p style={{ height: "min-content" }}>
          Our creator Elise Frazier came up with it as she realized the amount
          of influential women in technology that are not recognized more. She
          wanted this tp be thought as a learning module, that is fun,
          interactive and informative. So then she researched around for online
          database or APIs that store women technologists and found this amazing
          API source called: . That actually included women that she did not
          learn about yet. While this is a starter product for what she would
          like to expand with in the near future, this is still a great
          interface to learn about incredible women in the technology field that
          have made just as much as an impact today then during their time. So
          what you waiting for? Explore I Can Be Her and all it offers to you.
        </p>
        <div className={styles["app-image"]}>
          <Image src={SecondaryLogo} alt="secondary logo" />
        </div>
      </span>
      <span
        className="flex flex-col px-12 py-12"
        style={{ paddingTop: "10px" }}
      >
        <div className="text-3xl flex flex-row py-3 px-12 w-full">
          <h1>The Creator</h1>
        </div>
        {/* <div></div> */}
        <p className="px-12 w-full">
          This application was created by Elise Frazier who currently works a
          entry-level frontend developer and UI/UX designer. She still continues
          to keep her Data Science roots refreshed with passion projects and
          everyday work that involves using big datasources on the job.
        </p>
        <div className="flex flex-col" style={{ alignItems: "center" }}>
          <Image
            src={CreatorImg}
            alt="Creator Image"
            className="rounded-full py-2"
          />
          <div
            className="flex flex-row gap-2 py-2"
            style={{ alignItems: "center" }}
          >
            <Button
              variant="contained"
              className="bg-blue-400"
              href="https://www.linkedin.com/in/elise-frazier-89b356180/"
              sx={{
                ":hover": {
                  bgcolor: "darkblue",
                  color: "white",
                },
              }}
            >
              <LinkedInIcon />
            </Button>
            <Button
              variant="contained"
              className="bg-cyan-700"
              href="https://github.com/ElisefRaz17"
              sx={{
                ":hover": {
                  bgcolor: "darkcyan",
                  color: "white",
                },
              }}
            >
              <GitHubIcon />
            </Button>
            <Button
              variant="contained"
              className="bg-orange-300"
              href="https://elisefraz17.github.io/personal-portfolio/"
              sx={{
                ":hover": {
                  bgcolor: "darkorange",
                  color: "white",
                },
              }}
            >
              <LanguageIcon />
            </Button>
          </div>
        </div>
      </span>
    </div>
  );
}

export default page;
