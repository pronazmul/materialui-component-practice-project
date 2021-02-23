// import DrawerPractice from "./Components/DrawerPractice/DrawerPractice";
// import MainRouter from "./Components/MainRouter/MainRouter";
// import TabPractice from "./Components/TabPractice/TabPractice";
// import AccordionPractice from "./Components/AccordionPractice/AccordionPractice";
// import AppBarPractice from "./Components/AppBarPractice/AppBarPractice";
import CustomStylingWithStyle from "./Components/CustomStylingWithStyle/CustomStylingWithStyle";
// import MenuPracitce from "./Components/MenuPracitce/MenuPracitce";
// import { createContext, useState } from "react";
// import SnackBarLeader from "./Components/SnackBarPractice/SnackBarLeader";
// import SnackBarPractice from "./Components/SnackBarPractice/SnackBarPractice";

import "./styles.css";

// const App = () => <MainRouter />;
// const App = () => <TabPractice />;
// const App = () => <DrawerPractice />;

// SnackBar Data Practice
// export const ContexApi = createContext();
// const App = () => {
//   const [snackBarData, setSnackBarData] = useState({
//     snackBarOpen: false,
//     snackBarMessage: "",
//     snackBarType: "success"
//   });

//   return (
//     <ContexApi.Provider value={[snackBarData, setSnackBarData]}>
//       <SnackBarLeader />
//       <SnackBarPractice />
//     </ContexApi.Provider>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      {/* <AccordionPractice /> */}
      {/* <AppBarPractice /> */}
      {/* <MenuPracitce /> */}
      <CustomStylingWithStyle />
    </>
  );
};
export default App;
