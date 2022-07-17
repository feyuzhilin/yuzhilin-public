import "./css/title.css";
const Title = (props) => {
  return (
    <div className="title-wrap">
      <p>{props.name}</p>
    </div>
  );
};
export default Title;
