import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import chirpzListStyles from "./chirpzListStyles.module.css";

const ChirpzList = (props: any) => {
  const chirpzListApiResponseData = useSelector(
    (state: any) => state?.assetNotification?.chirpzListData
  );

  const [filteredChirpzListData, setFilteredChirpzListData] = useState<any>();

  useEffect(() => {
    if (
      chirpzListApiResponseData &&
      Object.keys(chirpzListApiResponseData).length > 0
    ) {
      const filteredChirpzListResponseData: any[] =
        chirpzListApiResponseData?.data?.body?.length > 0 &&
        chirpzListApiResponseData?.data?.body?.filter(
          (items: any) => items?.userName && items?.caption && items?.tags
        );
      setFilteredChirpzListData(filteredChirpzListResponseData);
    }
  }, [chirpzListApiResponseData]);

  return (
    <div className={chirpzListStyles.container}>
      <div className={chirpzListStyles.listContainer}>
        {filteredChirpzListData && filteredChirpzListData?.length > 0 ? (
          filteredChirpzListData?.map((item: any, index: any) => (
            <div key={index} className={chirpzListStyles.listItemContainer}>
              <div className={chirpzListStyles.userNameText}>
                {item?.userName}
              </div>
              <div className={chirpzListStyles.captionTextStyle}>
                {item?.caption}
              </div>
              <div className={chirpzListStyles.tagBtnContainerStyle}>
                {item?.tags?.length > 0 &&
                  item?.tags?.map((tag: any, index: number) => (
                    <button
                      key={index}
                      className={chirpzListStyles.buttonStyle}
                    >
                      {tag}
                    </button>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found...</div>
        )}
      </div>
    </div>
  );
};

export default ChirpzList;
