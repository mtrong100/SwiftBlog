import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/theme-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/SwiftBlog/">
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  </React.StrictMode>
);
