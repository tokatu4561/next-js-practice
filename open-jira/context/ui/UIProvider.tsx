import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" };

const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sidemenuOpen: true,
      };

    case "UI - Close Sidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };

    default:
      return state;
  }
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => dispatch({ type: "UI - Close Sidebar" });

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        closeSideMenu,
        openSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
