import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import App from "./App";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <IntlProvider locale={navigator.language}>
            <DarkModeProvider>
                <App />
            </DarkModeProvider>
        </IntlProvider>
    </React.StrictMode>
);
