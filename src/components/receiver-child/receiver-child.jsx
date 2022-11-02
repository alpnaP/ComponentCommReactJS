import "./ReceiverChild.css";

const ReceiverChild = ({ count }) => {
  return (
    <>
      <div className="receiver-child">
        <h1>Receiver Child</h1>
        <h2> Counter: {count}</h2>
      </div>
    </>
  );
};

export default ReceiverChild;