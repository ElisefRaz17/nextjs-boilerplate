"use client";

import React, { EventHandler, useContext, useEffect, useState } from "react";
import HeroImage from "../assets/HeroImage.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Link from "next/link";
// import { AspirationContext } from "./context";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { AspirationContext } from "../../context/aspiration.provider";
import styles from "../styling/hero.module.css";

function Hero() {
  const { aspiration, setAspiration } = useContext(AspirationContext);

  const router = useRouter();
  const pathname = usePathname();
  // const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setAspiration(event.target.value);
  };

  // function handleClick(){
  //   history.pushState({aspiration:aspiration},"",pathname+"/aspiration");
  //   router.push("aspiration");
  // }

  return (
    <>
      <div className={styles.content} style={{ display: "grid" }}>
        <Image
          src={HeroImage}
          alt="hero image"
          style={{ justifySelf: "center" }}
          className={styles.floating}
        />
        {/* <Box sx={{ minWidth: 120 }}> */}
        <div className="content-contaienr">
          <div
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "Barlow",
            }}
          >
            <p>What role in tech do you want to pursue or currently have?</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ fontFamily: "Barlow" }}
              >
                Select a role
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={aspiration}
                label="Aspiration"
                onChange={handleChange}
                MenuProps={{
                  disableScrollLock: true,
                }}
              >
                <MenuItem value={"Engineering"}>Engineering</MenuItem>
                <MenuItem value={"Entrepeneurship"}>Entrepeneurship</MenuItem>
                <MenuItem value={"Software Engineering"}>
                  Software Engineering
                </MenuItem>
                <MenuItem value={"Design"}>Design</MenuItem>
                <MenuItem value={"Data Science"}>Data Science</MenuItem>
                <MenuItem value={"Cybersecurity"}>Cybersecurity</MenuItem>
              </Select>
              <Link href="/aspiration" style={{ color: "white" }} passHref>
                <Button id={styles["aspire-btn"]}>Inspire Me!</Button>
              </Link>
            </FormControl>
          </div>
        </div>
      </div>
      <div className={styles.background}></div>
    </>
  );
}

export default Hero;
