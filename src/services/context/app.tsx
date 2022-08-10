import React, {createContext, useState, ReactNode} from 'react';

type AppContextData = {
  webViewUrl: string;
  setWebViewUrl: (url: string) => void;
};

const AppContext = createContext<AppContextData>({} as AppContextData);

type Props = {
  children: ReactNode;
};

const AppProvider = ({children}: Props) => {
  const [webViewUrl, setWebViewUrl] = useState<string>('');
  return (
    <AppContext.Provider
      value={{
        webViewUrl,
        setWebViewUrl,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
