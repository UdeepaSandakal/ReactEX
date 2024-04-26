import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSel, setEnableMultisel] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurretId = copyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurretId);
    if (findIndexOfCurretId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurretId, 1);

    setMultiple(copyMultiple);
  }
  console.log(selected, multiple);

  return (
    <>
      <div className="bg-black ">
        <div className="wrapper">
          <div>
            <button
              onClick={() => setEnableMultisel(!enableMultiSel)}
              className="btn"
            >
              Enable Multiple Selection
            </button>
          </div>
          <h3 className="header">Single Selection Accordion</h3>
          <div className="accordion">
            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div className="item">
                  <div
                    onClick={
                      enableMultiSel
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                    className="title"
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              ))
            ) : (
              <div>No data Found !</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
