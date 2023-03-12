import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

type State = { mode: string; isDarkMode: boolean };
export type Action = { type: "LIGHT_THEME" } | { type: "DARK_THEME" } | { type: "USER_DEVICE" };
type Dispatch = (action: Action) => void;

interface DarkModeContextInterface {
    state: State;
    dispatch: Dispatch;
}

const DarkModeContext = createContext<DarkModeContextInterface | undefined>(undefined);

function darkModeReducer(state: State, action: Action) {
    switch (action.type) {
        case "LIGHT_THEME": {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            return { ...state, mode: "light", isDarkMode: false };
        }
        case "DARK_THEME": {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            return { ...state, mode: "dark", isDarkMode: true };
        }
        case "USER_DEVICE": {
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            isDarkMode
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark");
            localStorage.theme = "userDevice";
            return { ...state, mode: "userDevice", isDarkMode };
        }
        default:
            throw new Error(`Unsupported action type`);
    }
}

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(darkModeReducer, { mode: "", isDarkMode: false });

    useEffect(() => {
        if (localStorage.theme === "dark") {
            dispatch({ type: "DARK_THEME" });
        } else if (localStorage.theme === "light") {
            dispatch({ type: "LIGHT_THEME" });
        } else {
            dispatch({ type: "USER_DEVICE" });
        }
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        if (state.mode === "userDevice") {
            mediaQuery.addEventListener("change", () => dispatch({ type: "USER_DEVICE" }));
            return () => mediaQuery.removeEventListener("change", () => dispatch({ type: "USER_DEVICE" }));
        }
    }, [state.mode]);

    console.log(localStorage, state);
    const providerValue = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch]
    );

    return <DarkModeContext.Provider value={providerValue}>{children}</DarkModeContext.Provider>;
}

export function useDarkModeContext() {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error("The context must be used inside the App component");
    }

    return context;
}

export default { DarkModeProvider, useDarkModeContext };
