import "./Success.scss";

const Success = ({onBackBtn, count}) => {
  return (
    <div className="success">
      <img
        className="tick"
        src="https://cdn-icons-png.flaticon.com/512/6459/6459980.png"
        width={"200px"}
      />
      <h3 className="title">Completed Successfully!</h3>
      <div className="text">{count} users were notified.</div>
      <button onClick={onBackBtn} className="buttonOrange back">Go Back</button>
    </div>
  );
};

export default Success;
