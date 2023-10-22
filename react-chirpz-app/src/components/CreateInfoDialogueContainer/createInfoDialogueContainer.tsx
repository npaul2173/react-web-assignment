import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getChirpzListDataPost } from "../../redux/actions/chirpzListActions";
import { closeIcon } from "../../assets";
import styles from "./styles.module.css";

const CreateInfoDialogueContainer = (props: any) => {
  const { setShowCreateChirpzInfoDialogue } = props;
  const dispatch = useDispatch();
  const handleCloseEvents = (event: any) => {
    (event.target?.id === "modelContainer" ||
      event.target?.alt === "closeIconDiv" ||
      event.target?.id === "cancelBtn") &&
      setShowCreateChirpzInfoDialogue((prev: boolean) => !prev);
  };
  const [tagCollections, setTagCollections] = useState<any>([]);
  const [tagsInputData, setTagsInputData] = useState<string>("");
  const [formValidationMessage, setFormValidationMessage] =
    useState<string>("");

  const handleTagsInput = (events: any) => {
    setTagsInputData(events.target.value);
  };

  const handleAddBtnClick = () => {
    setTagCollections((prevArr: any) => [...prevArr, `#${tagsInputData}`]);
    setTagsInputData("");
  };

  const captionInput = useRef<string>("");
  const handleCaption = (event: any) => {
    captionInput.current = event.target.value;
  };

  const handleCreate = () => {
    // Create a new Date object to get the current date and time
    const currentTime = new Date();

    const formattedTime = currentTime.toISOString().split(".");

    const splittedDate = formattedTime && `${formattedTime[0]}Z`;
    if (captionInput.current && tagCollections?.length > 0 && splittedDate) {
      setFormValidationMessage("");
      const createChirpzDataPayload = {
        apiId: "v1",
        isVerified: true,
        userName: "John Doe",
        caption: captionInput.current,
        tags: tagCollections,
        createdAt: splittedDate,
      };
      dispatch(getChirpzListDataPost(createChirpzDataPayload));
      setShowCreateChirpzInfoDialogue(false);
    } else {
      setFormValidationMessage("Enter valid Data...");
      setShowCreateChirpzInfoDialogue(true);
    }
  };

  return (
    <div
      id="modelContainer"
      className={styles.modelContainer}
      onClick={handleCloseEvents}
    >
      <div className={styles.infoDialogueContainer}>
        {(!captionInput.current || tagCollections?.length < 1) && (
          <div className={styles.errorMessageText}>{formValidationMessage}</div>
        )}
        <header className={styles.infoHeadContainer}>
          <div className={styles.infoHeadSubListContainer}>
            Create <span className={styles.infoHeadSubList}>Chirpz</span>
          </div>
          <div className={styles.infoHeadSubListCloseIcon}>
            <img width={"100%"} src={closeIcon} alt="closeIconDiv" />
          </div>
        </header>

        <section className={styles.infoSectionContainer}>
          <div className={styles.infoSectionCreateTaskInput}>
            <label className={styles.infoSectionCreateInput}>Create</label>
            <input
              placeholder="What’s on your mind?"
              onChange={handleCaption}
            />
          </div>

          <div className={styles.infoSectionTagsInputContainer}>
            <label className={styles.infoSectionCreateInput}>Add Tags</label>
            <div className={styles.infoSectionTagsInputSubContainer}>
              <input
                value={tagsInputData}
                placeholder="Write tags"
                onChange={handleTagsInput}
                className={styles.infoSectionTagsInput}
              />
              {tagsInputData && (
                <span
                  onClick={handleAddBtnClick}
                  className={styles.infoSectionTagsAddBtn}
                >
                  Add
                </span>
              )}
            </div>
            <div className={styles.tagsContainer}>
              {tagCollections &&
                tagCollections?.length > 0 &&
                tagCollections?.map((item: any, index: number) => (
                  <div key={index} className={styles.tagsBtn}>
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </section>

        <footer className={styles.footerStyle}>
          <button
            id="createBtn"
            className={styles.createButtonStyle}
            onClick={handleCreate}
          >
            Create
          </button>
          <button id="cancelBtn" className={styles.cancelButtonStyle}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CreateInfoDialogueContainer;
