import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar " src="shashank.jpg" alt="Shashank Yadav" />;
}

function Intro() {
  return (
    <div>
      <h1>Shashank Yadav</h1>
      <p>
        Part time cricketer full time software engineer. When not coding or
        development, I like to play cricket.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="✌🏻" color="red" />
      <Skill skill="HTML" emoji="🖐🏻" color="green" />
      <Skill skill="CSS" emoji="🖐️" color="yellow" />
      <Skill skill="Javascript" emoji="✌️" color="blue" />
      <Skill skill="SQL" emoji="📖" color="violet" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
