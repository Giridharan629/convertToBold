import React, { useRef } from "react";

const App = () => {
  const inputText = useRef();

  function processText() {
    let processed = inputText.current.value;

    processed = processed.replace(/(\d+)\.\s/g, "<li>");

    processed = processed.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    processed = processed.replace(/-\s/g, "<br>&nbsp;&nbsp;&nbsp;&nbsp;");

    processed = processed.replace(/<\/li>/g, "</li><br>");

    if (processed.includes("<li>")) {
      processed = `<ul>${processed}</ul>`;
    }

    document.querySelector(".result-text").innerHTML = processed;
  }

  return (
    <div className="container">
      <h1>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#e8eaed"
          >
            <path d="M404.67-198.67q-14.17 0-23.75-9.61-9.59-9.62-9.59-23.84 0-14.21 9.59-23.71 9.58-9.5 23.75-9.5h402q14.16 0 23.75 9.61 9.58 9.62 9.58 23.84 0 14.21-9.58 23.71-9.59 9.5-23.75 9.5h-402Zm0-248q-14.17 0-23.75-9.61-9.59-9.62-9.59-23.84 0-14.21 9.59-23.71 9.58-9.5 23.75-9.5h402q14.16 0 23.75 9.61 9.58 9.62 9.58 23.84 0 14.21-9.58 23.71-9.59 9.5-23.75 9.5h-402Zm0-248.66q-14.17 0-23.75-9.62-9.59-9.62-9.59-23.83 0-14.22 9.59-23.72 9.58-9.5 23.75-9.5h402q14.16 0 23.75 9.62 9.58 9.61 9.58 23.83 0 14.22-9.58 23.72-9.59 9.5-23.75 9.5h-402Zm-212 534.66q-29.7 0-50.85-20.5-21.15-20.5-21.15-50.5t20.83-50.83q20.83-20.83 50.83-20.83t50.5 21.15q20.5 21.15 20.5 50.85 0 29.15-20.76 49.91-20.75 20.75-49.9 20.75Zm0-248q-29.7 0-50.85-20.95-21.15-20.96-21.15-50.38t21.15-50.38q21.15-20.95 50.85-20.95 29.15 0 49.9 20.95 20.76 20.96 20.76 50.38t-20.76 50.38q-20.75 20.95-49.9 20.95ZM192-657.33q-29.43 0-50.38-20.96-20.95-20.95-20.95-50.38 0-29.42 20.95-50.38Q162.57-800 192-800q29.42 0 50.38 20.95 20.95 20.96 20.95 50.38 0 29.43-20.95 50.38-20.96 20.96-50.38 20.96Z" />
          </svg>
        </span>
        Text Formater
      </h1>

      <div className="input-box">
        <textarea ref={inputText} name="paragraph" id="para"></textarea>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            processText();
          }}
        >
          Submit
        </button>
      </div>
      <div className="result">
        <p className="result-caption">Formated Text</p>
        <p className="result-text"></p>
      </div>
    </div>
  );
};

export default App;
