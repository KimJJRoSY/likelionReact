import { useState, useEffect } from "react";

import React from "react";

const Item = ({ item, setChanged, setChecked, checked }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setChanged(item);
  }, [count]);

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setChecked(checked + 1);
    } else {
      setChecked(checked - 1);
    }
  };

  return (
    <>
      <li>
        <input type="checkbox" onChange={handleCheckbox} />
        <span>{item}</span>
        <div>
          <div>{count}</div>
          <div className={"button-list"}>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </li>

      <style jsx>{`
        article {
          height: 100vh;
          width: 100vw;
          max-width: 30rem;
          margin: 0 auto;
          padding: 1.5rem;
          background: #ffc0cb21;
        }

        article h1 {
          padding: 0 0.5rem;
        }
        section.changed {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        section.changed > div {
          color: purple;
          font-weight: 800;
        }
        section.list {
          display: flex;
          flex-direction: column;
        }
        section.list ol {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: white;
          box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
          height: 2rem;
        }
        li > span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        li > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        li > div > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 5px;
          background: #efeded;
          font-weight: 700;
        }
        li > div > div.button-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        li > div > div.button-list button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.7rem;
          height: 1.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          background: #f6ecff;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default Item;