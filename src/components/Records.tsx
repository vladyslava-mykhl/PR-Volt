import styled from "styled-components";
import Record from "./Record";
import RecordActions from "./RecordActions";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { completeRecord } from "../store/recordSlice";

const Records = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { filter, records } = useSelector((state: RootState) => state.records);
  const filteredRecords = records.filter(
    (record) =>
      (filter === "Completed" && record.completed) ||
      (filter === "Current" && !record.completed) ||
      filter === "All",
  );

  const handleRecordClick = (id: string): void => {
    dispatch(completeRecord(id));
  };

  return (
    <RecordsContainer>
      <RecordActions />
      <div className="records-container">
        {filter !== "All" && (
          <p className="record-count">
            {filteredRecords.length
              ? `Record count: ${filteredRecords.length}`
              : "No records available"}
          </p>
        )}
        <Record
          records={filteredRecords}
          handleRecordClick={handleRecordClick}
        />
      </div>
    </RecordsContainer>
  );
};

export default Records;

export const RecordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 80%;
  padding: 40px;
  margin: 0 auto;
  .records-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    .record-count {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
