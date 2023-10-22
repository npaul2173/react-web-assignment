import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ChirpzList from "../../components/ChirpzListComponent";
import Header from "../../components/Header";
import CreateInfoDialogueContainer from "../../components/CreateInfoDialogueContainer";
import { getChirpzListData } from "../../redux/actions/chirpzListActions";
import styles from "./styles.module.css";

const HomePage = (props: any) => {
  const dispatch = useDispatch();

  const loaderChirpzPostApiResponse = useSelector(
    (state: any) => state?.assetNotification?.loaderChirpzPost
  );

  const [showCreateChirpzInfoDialogue, setShowCreateChirpzInfoDialogue] =
    useState<boolean>(false);
  const handleCreateChirpz = () => {
    setShowCreateChirpzInfoDialogue(!showCreateChirpzInfoDialogue);
  };

  useEffect(() => {
    if (!loaderChirpzPostApiResponse) {
      const getChirpzListDataPayload = {};
      dispatch(getChirpzListData(getChirpzListDataPayload));
    }
  }, [loaderChirpzPostApiResponse]);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.headerContainer}>
          <Header handleCreateChirpz={handleCreateChirpz} />
        </div>
        <div className={styles.chirpzListContainer}>
          <ChirpzList />
        </div>

        {showCreateChirpzInfoDialogue && (
          <CreateInfoDialogueContainer
            setShowCreateChirpzInfoDialogue={setShowCreateChirpzInfoDialogue}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
