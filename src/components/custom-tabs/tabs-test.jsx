import Tabs from "./tabs";
import "./tabs.css";

function RandomComponents() {
  return <h1>some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>this is content for Tab 1</div>,
    },
    {
      label: "Tab 1",
      content: <div>this is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponents />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
