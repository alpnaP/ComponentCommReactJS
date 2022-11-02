
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

// import React from 'react'

// const SenderChild = (props) => {
//   return (
//     <>
//     <h3>{props.name}</h3>
//     <button name = "send" onClick = {() => props.onSend("This value from child to parent")}>Send Value</button>
//     </>
//   )
// }



// export default SenderChild;