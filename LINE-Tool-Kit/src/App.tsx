import liff from "@line/liff";
import { useState, useEffect, useRef } from "react";

function App() {
  const liffId = "2000072918-8MrOwvZE";
  let [Status, setStatus] = useState("None");
  let msgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    liff
      .init({
        liffId: liffId,
      })
      .then(() => {
        setStatus("Connected");
      })
      .catch((err) => {
        setStatus("Error / 連絡先:@macl2189 / " + err);
      });
  }, []);

  function SendMsg() {
    if (msgRef.current !== null && msgRef.current.value !== null) {
      liff.sendMessages([
        {
          type: "text",
          text: msgRef.current.value,
        },
      ]);
      msgRef.current.value = "";
      setStatus("Sended");
    }
  }

  return (
    <>
      <div>
        Status : {Status} <br />
        <input type="text" placeholder="text" ref={msgRef} />
        <button onClick={SendMsg}>Send</button>
      </div>
    </>
  );
}

export default App;
