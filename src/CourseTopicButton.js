import "./coursesStyles.css";

function Button(props) {
  return (
    <div
      className="nav-link--container"
      onClick={() => {
        props.change(props.id);
      }}
    >
      <p>{props.topicName}</p>
    </div>
  );
}

export default Button;
