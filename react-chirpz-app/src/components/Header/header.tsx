import React from "react";
import styles from "./styles.module.css";
import { profilePicture, birdIcon, vector } from "../../assets";

const Header = (props: any) => {
  return (
    <>
      <div
        className={styles.container}
        style={{ background: "#091224", color: "#ffffff" }}
      >
        <div className={styles.gridItem}>
          <div>
            <img src={birdIcon} />
          </div>
          <div style={{fontSize: "1vw", fontWeight: 600}}>Chirpz</div>
        </div>

        <div
          className={styles.gridItem}
          style={{
            borderRight: "1px solid #28395A",
            borderLeft: "1px solid #28395A",
          }}
        >
          <div style={{fontSize: "1vw", fontWeight: 700}}>Home</div>
          <div style={{ position: "absolute", right: "2vw" }}>
            <button
              style={{
                border: "none",
                padding: "0.4vw",
                borderRadius: "1vw",
                width: "4vw",
                height: "1.5vw",
                backgroundColor: "#E88607",
                color: "#fff",
                fontSize: "0.8vw",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Create
            </button>
          </div>
        </div>

        <div className={styles.gridItem}>
          <div>
            <img src={profilePicture} />
          </div>
          <div style={{fontSize: "1vw", fontWeight: 600}}>John Doe</div>
          <div>
            <img src={vector} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
