import { useState } from "react";
import { AppContext } from "../hooks/useAppContext";

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  //Upload Page State

  const [printerID, setPrinterID] = useState("auto");
  const [pagesSelection, setPagesSelection] = useState("all");
  const [copiesNumber, setCopiesNumber] = useState(1);
  const [paperSize, setPaperSize] = useState("A4");
  const [orientation, setOrientation] = useState("portrait");
  const [fileUpload, setFileUpload] = useState(null);

  //End Upload Page State

  return (
    <AppContext.Provider
      value={{
        pagesSelection,
        setPagesSelection,
        printerID,
        setPrinterID,
        copiesNumber,
        setCopiesNumber,
        paperSize,
        setPaperSize,
        orientation,
        setOrientation,
        fileUpload,
        setFileUpload,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
