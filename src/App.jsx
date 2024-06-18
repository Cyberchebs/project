import { React } from "react";
import "./App.css";
import {
  Accordion,
  RandomColor,
  StarRate,
  Slider,
  LoadMore,
  SideMenu,
  QRCodeGenerator,
  LightDarkMode,
  ScrollIndicator,
  TabTest,
  ModalTest,
  GithubProfileFinder,
  SearchAutoComplete,
  Frogger,
  TicTacToe,
  UseFetchHookTest,
  ScrollToSection,
} from "./components/export";
import menus from "./components/branchmenu/data";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseonOnclickoutsideTest from "./components/useoutsideClick/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top";

function App() {
  return (
    <div>
      {/* <Accordion />
      <RandomColor />
      <StarRate />
      <Slider url={"https://picsum.photos/v2/list"} page={'1'} limit={'10'}/> */}
      {/* <LoadMore /> */}
      {/* <SideMenu menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/*       <ScrollIndicator /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <Frogger /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseonOnclickoutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      <ScrollToSection />
    </div>
  );
}

export default App;
