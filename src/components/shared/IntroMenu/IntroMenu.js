import React from "react";
import { useSelector } from "react-redux";
import Box from "../Box/Box";
import * as icon from '../../../assets/img/icon/index'
import Button from "../Button/Button";
export default function IntroMenu() {
  let windowsWidth = useSelector((store) =>store?.tools?.windowsWidth);
  return (
    <Box
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap:"wrap"
      }}
    >
      <div style={{ fontSize: "1.5rem" }}>VISION UI FREE</div>
      <div style={{ display: windowsWidth > 567 ? "flex" : "none", gap: "2rem",color:"rgba(245,245,245,0.6)"}}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center"}}>
          <icon.OverviewIcon color="rgba(245,245,245,0.6)"/>
          <p>DASHBOARD</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <icon.ProfileIcon width="10" height="10"  color="rgba(245,245,245,0.6)"/>
          <p>PROFILE</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <icon.SignUpPage  color="rgba(245,245,245,0.6)"/>
          <p>SIGN UP</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <icon.SignInPage  color="rgba(245,245,245,0.6)"/>
          <p>SIGN IN</p>
        </div>
      </div>
      <Button 
        onClick={()=>{alert("Downloading")}}
        sx={{ border: "none", backgroundColor: "var(--color-brand--3)" }}>
        Free Download
      </Button>
    </Box>
  );
}
