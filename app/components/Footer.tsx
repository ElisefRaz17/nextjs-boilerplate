import React from "react";
import Logo from "@/app/assets/Logo.png";
import Image from "next/image";
function Footer() {
  return (
    // <div className="mt-auto">
      <div
        className="bg-orange-100 footer bottom-0 w-full"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          bottom:0,
          marginTop:'auto'
        }}
      >
        <Image
          src={Logo}
          height={100}
          width={100}
          alt="footer logo"
          style={{ paddingTop: "20px" }}
        />
        <span style={{ padding: "20px", marginLeft: "auto" }}>
          {" "}
          Created by Elise | Beautiful Me Technologies &copy; 2024
        </span>
      </div>
    // </div>
  );
}

export default Footer;
