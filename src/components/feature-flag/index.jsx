import { useContext } from "react";
import {
  Accordion,
  LightDarkMode,
  RandomColor,
  SideMenu,
  TicTacToe,
} from "../export";
import { featureFlagsContext } from "./context";
import menus from "../branchmenu/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(featureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "ShowRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: " showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <SideMenu menus={menus} />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>loading data!! please wait</h1>;
  return (
    <div>
      <h1>feature Flags</h1>
      {componentsToRender.map(componentItem =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
