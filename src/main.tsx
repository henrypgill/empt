import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";

import Home from "./Home.tsx";
import { Generate } from "./generate/Generate.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ComponentGenerator, JsDocGenerator } from "./generate/index.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/generate" element={<Generate />}>
                            <Route
                                path="/generate/component"
                                element={<ComponentGenerator />}
                            />
                            <Route
                                path="/generate/jsdoc"
                                element={<JsDocGenerator />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
