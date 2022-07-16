import "./index.css";
import { useState } from "react";
const Content = () => {
  const [musicList, setMusicList] = useState([]);
  const [id, setId] = useState(0);
  const loadList = () => {
    setId(id+1);
    musicList.push({ id: id, text: `内容${id}` });
    setMusicList([...musicList]);
  };
  return (
    <div className="content-wrap">
      {musicList.map((item) => (
        <p className="item-music" key={item.id}>
          {item.text}
        </p>
      ))}
      <div className="load-list" onClick={loadList}>
        加载更多
      </div>
    </div>
  );
};
export default Content;
