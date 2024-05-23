import { createContext, useState } from "react";

// Step 1: Create Context
export const BulbContext = createContext();

// Step 2.A : Provide Context
export function BulbContextProvider(props) {
  const [isOn, setIsOn] = useState(false);

  const switchOn = () => {
    setIsOn(true)
  };

  const switchOff = () => {
    /*complete the missing code*/
    setIsOn(false)
  };

  return (
    <BulbContext.Provider
      value={
        {
         isOn , switchOff  ,switchOn
        }
      }
    >
      {props.children}
    </BulbContext.Provider>
  );
}
