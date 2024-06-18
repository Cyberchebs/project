import { React, useState } from "react";
import data from "./data";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpymutiple = [...multiple];
    const findIndexOfCurrentId = cpymutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpymutiple.push(getCurrentId);
    else cpymutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpymutiple);
  }

  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        enable multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                {<h3>{dataItem.question}</h3>}
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/*{selected === dataItem.id ||
               multiple.indexOf(dataItem.id) !== -1 ? (
               <div className="content">{dataItem.answer}</div>
               ) : null} */}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
