import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { addRecord, setFilter } from "../store/recordSlice";
import { useState } from "react";

const RecordActions = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [newRecordName, setNewRecordName] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [errorMessage, setErrorMessage] = useState("");
  const recordNameMaxLength = 20;

  const handleNewRecordName = (name: string): void => {
    if (name.length > recordNameMaxLength) {
      setErrorMessage("The name is too long");
    } else {
      setErrorMessage("");
      setNewRecordName(name);
    }
  };

  const handleStatusChange = (status: string): void => {
    dispatch(setFilter(status));
    setSelectedStatus(status);
  };

  const createNewRecord = (): void => {
    dispatch(addRecord(newRecordName));
    setNewRecordName("");
  };

  return (
    <RecordActionsContainer>
      <FormControl className="form" size="small">
        <InputLabel>Status</InputLabel>
        <Select
          value={selectedStatus}
          label="Status"
          onChange={({ target: { value } }) => handleStatusChange(value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Current">Current</MenuItem>
        </Select>
      </FormControl>
      <TextField
        value={newRecordName}
        label="Enter record name"
        error={!!errorMessage}
        helperText={errorMessage}
        size="small"
        variant="outlined"
        onChange={({ target: { value } }) => handleNewRecordName(value)}
      />
      <Button
        disabled={!newRecordName || !!errorMessage}
        size="medium"
        variant="contained"
        onClick={createNewRecord}
      >
        Add record
      </Button>
    </RecordActionsContainer>
  );
};

export default RecordActions;

export const RecordActionsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: unset;
  }
  .form {
    min-width: 130px;
  }
`;
