import "./ReceiverChild.css";

const ReceiverChild = ({ count }) => {
  return (
    <>
      <div className="receiver-child">
        <h1>Receiver Child</h1>
        <h4>{count}</h4>
      </div>
    </>
  );
};

export default ReceiverChild;