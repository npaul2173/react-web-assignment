import React from "react";
import { profilePicture, birdIcon, vector } from "../../assets";
import styles from "./styles.module.css";

const Header = (props: any) => {
  const { handleCreateChirpz } = props;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridItem}>
          <div className={styles.birdImgStyle}>
            <img width={"100%"} height={"100%"} src={birdIcon} />
          </div>
          <div className={styles.headerText}>Chirpz</div>
        </div>

        <div className={styles.gridItem}>
          <div className={styles.homeTextStyle}>Home</div>
          <div className={styles.createBtncontainer}>
            <button
              className={styles.createBtnStyle}
              onClick={handleCreateChirpz}
            >
              Create
            </button>
          </div>
        </div>

        <div className={styles.gridItem}>
          <div className={styles.profilePictureImg}>
            <img width={"100%"} height={"100%"} src={profilePicture} />
          </div>
          <div className={styles.userNameStyle}>John Doe</div>
          <div className={styles.menuIconStyle}>
            <img width={"100%"} height={"100%"} src={vector} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
