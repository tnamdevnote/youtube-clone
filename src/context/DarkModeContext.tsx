import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import useBoolean from "../hooks/useBoolean";

type State = { mode: string };
type Action = { type: "LIGHT_THEME" } | { type: "DARK_THEME" } | { type: "USE_DEVICE_SETTINGS" };
type Dispatch = (action: Action) => void;
interface DarkModeContextInterface {
    state: State;
    dispatch: Dispatch;
}

const DarkModeContext = createContext<DarkModeContextInterface | undefined>(undefined);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(darkModeReducer, { mode: "" });

    useEffect(() => {
        const isDark =
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        isDark ? dispatch({ type: "DARK_THEME" }) : dispatch({ type: "LIGHT_THEME" });
    }, []);

    const providerValue = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch]
    );
    return <DarkModeContext.Provider value={providerValue}>{children}</DarkModeContext.Provider>;
}

function darkModeReducer(state: State, action: Action) {
    switch (action.type) {
        case "LIGHT_THEME": {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            return { mode: "light" };
        }
        case "DARK_THEME": {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            return { mode: "dark" };
        }
        case "USE_DEVICE_SETTINGS": {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("theme");
            return { mode: "deviceSettings" };
        }
        default:
            throw new Error(`Unsupported action type`);
    }
}

export function useDarkModeContext() {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error("The context must be used inside the App component");
    }

    return context;
}

export default { DarkModeProvider, useDarkModeContext };
