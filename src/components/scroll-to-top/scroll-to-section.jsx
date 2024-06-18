import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();
  const data = [
    {
      Label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      Label: "second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      Label: "third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
    {
      Label: "fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
    {
      Label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
  ];
  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>scroll to section</h1>
      <button onClick={handleScrollToSection}>click to scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 2 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.Label}</h3>
        </div>
      ))}
    </div>
  );
}
