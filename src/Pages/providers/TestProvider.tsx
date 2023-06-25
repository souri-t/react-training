import { createContext, useState } from "react";

export const TestContext = createContext({});

export const TestProvider = (props:any) => {
    // const [userInfo, setUserInfo] = useState({ userName: "test" });
    const { children } = props;
    const sampleObj = {sampleValue:"test"}
  
  return(
    <TestContext.Provider value={{sampleObj}}>
      {children}
    </TestContext.Provider>
  )
}