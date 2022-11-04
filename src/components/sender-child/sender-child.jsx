
import "./SenderChild.css";

const SenderChild = ({ getValueFromSenderChild }) => {
  return (
    <>
      <div className="sender-child">
        <h1>Sender Child</h1>
        <button className="btn" onClick={getValueFromSenderChild}>
          Click me
        </button>
      </div>
    </>
  );
};

export default SenderChild;

