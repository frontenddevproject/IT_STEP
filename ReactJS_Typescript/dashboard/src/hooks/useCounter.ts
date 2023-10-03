import { useState } from "react";

export const useCounter = (defaultValueCounter: number): [number, ...Array<() => void>] => { 
   const [counterValue, setCounterValue] = useState(defaultValueCounter);
   const increment = () => setCounterValue(counterValue + 1);

   const decrement = () => setCounterValue(counterValue - 1);
   
   return [counterValue, increment, decrement]
 }