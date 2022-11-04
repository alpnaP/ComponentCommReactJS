import React, { useState } from 'react'
import SenderChild from '../sender-child/sender-child'
import ReceiverChild from '../receiver-child/receiver-child'

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const getValueFromSenderChild = () => {
    setCounter(counter + 1 );
  };
  return (
    <>
      <SenderChild getValueFromSenderChild={getValueFromSenderChild} />
      <ReceiverChild count={counter} />
    </>
  )
}

export default Parent