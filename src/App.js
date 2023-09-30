import { useState, useEffect } from "react";
import Item from "./Item";

function App() {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [changed, setChanged] = useState(null);
  const [checked, setChecked] = useState(0);
  return (
    <>
      <article>
        <section className={"changed"}>
          <h1>방금 변경된 아이템 </h1>
          <div>{changed}</div>
        </section>
        <section className={"changed"}>
          <h1>체크된 아이템 개수 </h1>
          <div>{checked}개</div>
        </section>
        <section>
          <h1>아이템 리스트</h1>
        </section>
        <section className={"list"}>
          <ol>
            {alphabet.map((item) => {
              return (
                <>
                  <Item
                    key={item}
                    item={item}
                    setChanged={setChanged}
                    setChecked={setChecked}
                    checked={checked}
                  />
                </>
              );
            })}
          </ol>
        </section>
      </article>
      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
}

export default App;
