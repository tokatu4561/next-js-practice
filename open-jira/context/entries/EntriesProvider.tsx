import { FC, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces/entry";
import { EntriesContext } from "./EntriesContext";
import axios, { Axios } from "axios";
import { useSnackbar } from "notistack";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

type EntriesActionType =
  | { type: "[Entry] Add-Entry"; payload: Entry }
  | { type: "[Entry] Entry-Updated"; payload: Entry }
  | { type: "[Entry] Refresh-Data"; payload: Entry[] };

const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case "[Entry] Entry-Updated":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };

    case "[Entry] Refresh-Data":
      return {
        ...state,
        entries: [...action.payload],
      };

    default:
      return state;
  }
};

export const EntriesProvider: FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await axios.post<Entry>("/api/entries", { description });

    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = async (entry: Entry, isShowSnackBar = false) => {
    const { _id, description, status } = entry;

    try {
      const { data } = await axios.put<Entry>(`/api/entries/${_id}`, {
        description,
        status,
      });

      dispatch({ type: "[Entry] Entry-Updated", payload: data });

      if (isShowSnackBar)
        enqueueSnackbar("Entrada actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntries = async () => {
    const { data } = await axios.get<Entry[]>("/api/entries");
    dispatch({ type: "[Entry] Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
