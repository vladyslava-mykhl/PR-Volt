import { IRecord } from "../interfaces/Record";
import styled from "styled-components";

interface IRecordItemProps {
  records: IRecord[];
  handleRecordClick: (id: string) => void;
}

const Record = ({
  records,
  handleRecordClick,
}: IRecordItemProps): JSX.Element => {
  return (
    <>
      {records.map((record: IRecord) => (
        <RecordContainer key={record.id}>
          <p className="name" onClick={() => handleRecordClick(record.id)}>
            {record.name}
          </p>
          <p className="status">
            {record.completed ? "Completed" : "Not completed"}
          </p>
        </RecordContainer>
      ))}
    </>
  );
};

export default Record;

export const RecordContainer = styled.div`
  padding: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;

  .name {
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  .status {
    font-size: 18px;
    font-weight: 400;
  }
`;
