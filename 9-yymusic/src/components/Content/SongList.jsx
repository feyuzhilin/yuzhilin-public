import "./css/songList.css";
const Title = (props) => {
  console.log(props);
  return (
    <div className="song-wrap">
      {
        props.data.map(item=>(
          <div className="song-item" key={item.id}>
            <div className="song-text">{item.text}</div>
            <div className="song-sub-text">{item.subText}</div>
          </div>
        ))
      }
    </div>
  );
};
export default Title;
