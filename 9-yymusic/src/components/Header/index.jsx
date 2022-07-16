import "./index.css";
const Header = () => {
  const state = {
    headerList: [
      { id: 0, text: "发现音乐" },
      { id: 1, text: "我的音乐" },
      { id: 2, text: "关注" },
      { id: 3, text: "商城" },
    ],
  };
  return (
    <div className="header-wrap">
      <div className="header">
        {state.headerList.map((item) => (
          <p className="item-link" key={item.id}>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Header;
