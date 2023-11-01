import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, SetCount] = useState(initialValue);

  const increaseCount = () => SetCount((count) => count + 1);
  const decreaseCount = () => SetCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
