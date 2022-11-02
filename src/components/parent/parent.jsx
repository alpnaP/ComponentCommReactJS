import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import SenderChild from '../sender-child/sender-child'
import ReceiverChild from '../receiver-child/receiver-child'

const Parent = () => {
  const [value, setValue] = useState(0);
  const getValueFromSenderChild = () => {
    setValue(value + 1);
  };
  return (
    <>
      <SenderChild getValueFromSenderChild={getValueFromSenderChild} />
      <ReceiverChild count={value} />
    </>
  )
}

export default Parent