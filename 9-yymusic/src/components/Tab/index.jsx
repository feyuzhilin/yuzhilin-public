import "./index.css";
import { useState } from "react";
const Tab = () => {
  const [state, setState] = useState({
    tabList: [
      { index: 0, name: "推荐音乐" },
      { index: 1, name: "热歌榜" },
      { index: 2, name: "搜索" },
    ],
    activeIndex: 0,
  });

  const changeTab = (e) => {
    let _state = Object.assign({}, state);
    if (e.target.className === "tab-item ") {
      _state.activeIndex = e.target.dataset.index * 1;
      setState(_state);
    }
  };
  return (
    <div className="tab-wrap" onClick={changeTab}>
      {state.tabList.map((item) => (
        <div
          className={`tab-item ${
            item.index === state.activeIndex ? "active" : ""
          }`}
          key={item.index}
          data-index={item.index}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default Tab;
