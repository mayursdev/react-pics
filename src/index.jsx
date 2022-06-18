import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

import App from "./components/App";
const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
