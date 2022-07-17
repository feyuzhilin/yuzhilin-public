import "./css/index.scss";
import Title from "./Title";
import ImgText from "./ImgText";
import SongList from "./SongList";
import mock from "../../common/mock";
import { useState, useEffect } from "react";
import React from "react";
const Content = () => {
  let initialSatet = [
    { compType: "label", title: "编辑推荐" },
    {
      compType: "image_text",
      data: [
        { text: "歌单歌单歌单0", id: 0 },
        { text: "歌单歌单歌单1", id: 1 },
        { text: "歌单歌单歌单2", id: 2 },
        { text: "歌单歌单歌单3", id: 3 },
        { text: "歌单歌单歌单4", id: 4 },
        { text: "歌单歌单歌单5", id: 5 },
      ],
    },
    { compType: "label", title: "最新音乐" },
    {
      compType: "song_list",
    },
  ];
  const [state, setstate] = useState(initialSatet);
  const [songState, setsongState] = useState([]);

  const getSongList = async () => {
    const res = await mock();
    setsongState(res.result)
  };

  useEffect(() => {
    state.forEach((item) => {
      if (item.compType === "song_list") {
        getSongList();
      }
    });
  }, []);

  const compCheck = (comp) => {
    if (comp.compType === "label") {
      return <Title name={comp.title}></Title>;
    }
    if (comp.compType === "image_text") {
      return <ImgText data={comp.data}></ImgText>;
    }
    if (comp.compType === "song_list") {
      return <SongList data={songState}></SongList>;
    }
  };

  return (
    <div className="content-wrap">
      {state.map((comp, index) => {
        return (
          <div className={`${comp.compType}`} key={index}>
            {compCheck(comp)}
          </div>
        );
      })}
    </div>
  );
};
export default Content;
