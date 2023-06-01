import "./styles.css";
import { useState, useEffect, useCallback } from "react";
import Display from "./Display/display.js";
import ClearDisplay from "./Operations/clear.js";
import Numbers from "./Numbers/numbers.js";
import Calculate from "./Operations/calculate";
import Operators from "./Operations/operators.js";

export default function App() {
  const [input, setInput] = useState("0");
  const [tempNum, setTempNum] = useState("0");
  const [equal, setEqual] = useState(false);

  const keyInput = useCallback(
    (e) => {
      if (/[0-9./*+-]/.test(e.key)) {
        if (tempNum[0] === "0") {
          setTempNum(e.key);
          setInput(e.key);

          setEqual(false);
        } else if (/[/*+-]/.test(tempNum) && /[/*+]/.test(e.key)) {
          setTempNum(e.key);
        } else if (/[/*+-]/.test(tempNum) && /[-]/.test(e.key)) {
          setTempNum(tempNum + e.key);
        } else if (/[/*+]/.test(tempNum) && /[0-9]/.test(e.key)) {
          setInput(input + tempNum + e.key);

          setTempNum(e.key);
          setEqual(false);
        } else if (tempNum === "-" && /[0-9]/.test(e.key)) {
          setInput(input + "-" + e.key);

          setTempNum(e.key);
          setEqual(false);
        } else if (/[0-9]/.test(e.key) && equal) {
          setTempNum(e.key);
          setInput(e.key);

          setEqual(false);
        } else if (/[0-9]/.test(e.key)) {
          setTempNum(tempNum + e.key);
          setInput(input + e.key);
        } else if (/[/*+-]/.test(e.key)) {
          setTempNum(e.key);

          document.getElementById("decimal").disabled = false;
        } else if (e.key === ".") {
          setTempNum(tempNum + e.key);
          setInput(input + e.key);
          document.getElementById("decimal").disabled = true;
        } else {
          setInput(input + e.key);
        }
      } else if (e.key === "Enter" || e.key === "=") {
        try {
          // eslint-disable-next-line no-eval
          setInput(eval(input));
          // eslint-disable-next-line no-eval
          setTempNum(eval(input));

          setEqual(true);

          document.getElementById("decimal").disabled = false;
        } catch (e) {
          setInput(e.message);
        }
      }
    },
    [input, tempNum, equal]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyInput);
    return () => {
      window.removeEventListener("keydown", keyInput);
    };
  }, [keyInput]);

  function handleClick(e) {
    if (tempNum[0] === "0") {
      setTempNum(e.target.value);
      setInput(e.target.value);

      setEqual(false);
    } else if (/[/*+-]/.test(tempNum) && /[/*+]/.test(e.target.value)) {
      setTempNum(e.target.value);
    } else if (/[/*+-]/.test(tempNum) && /[-]/.test(e.target.value)) {
      setTempNum(tempNum + e.target.value);
    } else if (/[/*+]/.test(tempNum) && /[0-9]/.test(e.target.value)) {
      setInput(input + tempNum + e.target.value);

      setTempNum(e.target.value);
      setEqual(false);
    } else if (tempNum === "-" && /[0-9]/.test(e.target.value)) {
      setInput(input + "-" + e.target.value);

      setTempNum(e.target.value);
      setEqual(false);
    } else if (/[0-9]/.test(e.target.value) && equal) {
      setTempNum(e.target.value);
      setInput(e.target.value);

      setEqual(false);
    } else if (/[0-9]/.test(e.target.value)) {
      setTempNum(tempNum + e.target.value);
      setInput(input + e.target.value);
    } else if (/[/*+-]/.test(e.target.value)) {
      setTempNum(e.target.value);
      //setInput(input + e.target.value);
      document.getElementById("decimal").disabled = false;
    } else if (e.target.value === ".") {
      setTempNum(tempNum + e.target.value);
      setInput(input + e.target.value);
      document.getElementById("decimal").disabled = true;
    } else {
      setInput(input + e.target.value);
    }
  }

  function calculate(e) {
    if (e.target.value === "equal") {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input));
        // eslint-disable-next-line no-eval
        setTempNum(eval(input));

        setEqual(true);
        document.getElementById("decimal").disabled = false;
      } catch (e) {
        setInput(e.message);
      }
    }
  }

  function removeInput() {
    setInput("0");
    setTempNum("0");
    document.getElementById("decimal").disabled = false;
  }

  return (
    <div
      className="container w-50 bg-light my-auto mx-auto rounded p-3"
      style={{ maxWidth: "400px" }}
    >
      <Display tempNum={tempNum} input={input} />

      <div className="row">
        <div className="col-8 pe-1 pt-1">
          <ClearDisplay removeInput={removeInput} />
          <Numbers handleClick={handleClick} />
        </div>

        <div
          className="col"
          style={{ paddingTop: "2px", paddingRight: "12px" }}
        >
          <Operators handleClick={handleClick} />
          <Calculate calculate={calculate} />
        </div>
      </div>
    </div>
  );
}
