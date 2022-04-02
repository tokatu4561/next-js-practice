import { v4 as uuidv4 } from "uuid";
import { FC, useReducer } from "react";
import { Entry } from "../../interfaces/entry";
import { EntriesContext } from "./EntriesContext";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "練習中です",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "練習中です",
      status: "in-progress",
      createdAt: Date.now() - 10000,
    },
    {
      _id: uuidv4(),
      description: "練習中です",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
};

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" };

const entriesReducer = (
  state: UIState,
  action: UIActionType
): Entries_INITIAL_STATE => {
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

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
