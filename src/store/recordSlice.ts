import { createSlice } from "@reduxjs/toolkit";
import { IRecord } from "../interfaces/Record";
import { v4 as uuidv4 } from "uuid";

const recordSlice = createSlice({
  name: "records",
  initialState: {
    records: [
      {
        id: uuidv4(),
        name: "Test 1",
        completed: false,
      },
      {
        id: uuidv4(),
        name: "Test 2",
        completed: true,
      },
    ] as IRecord[],
    filter: "All",
  },
  reducers: {
    addRecord(state, { payload: name }) {
      state.records.push({
        id: uuidv4(),
        name: name,
        completed: false,
      });
    },
    completeRecord(state, { payload: id }) {
      const toggleRecord = state.records.find((record) => record.id === id);
      if (toggleRecord) {
        toggleRecord.completed = !toggleRecord.completed;
      }
    },
    setFilter(state, { payload: filter }) {
      state.filter = filter;
    },
  },
});

export const { addRecord, completeRecord, setFilter } = recordSlice.actions;
export default recordSlice.reducer;
