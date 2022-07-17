import "./css/imgText.css";
const Title = (props) => {
  return (
    <div className="img-text-wrap">
      {
        props.data.map(item=>(
          <div className="img-text-item" key={item.id}>
            <img src="http://p1.music.126.net/qO5IXdtPmWIMTNbmXgxK8Q==/109951163058256684.jpg?imageView=1&type=webp&thumbnail=369x0" alt="xixi"/>
            <p>{item.text}</p>
          </div>
        ))
      }
    </div>
  );
};
export default Title;
