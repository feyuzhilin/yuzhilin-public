import "./css/songList.scss";
const SongList = (props) => {
  console.log(props,"songState");
  return (
    <div className="song-wrap">
      {
        props.data.map(item=>(
          <div className="song-item" key={item.id}>
            <div className="song-text">{item.name}</div>
            <div className="song-sub-text">{item.song.artists[0].name + ' - ' + item.name}</div>
          </div>
        ))
      }
    </div>
  );
};
export default SongList;
