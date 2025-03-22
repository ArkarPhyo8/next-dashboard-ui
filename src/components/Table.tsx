
import {
  AnnouncementType,
  AssignmentType,
  ClassType,
  EventType,
  ExamType,
  LessonType,
  ParentType,
  ResultType,
  StudentType,
  SubjectType,
  TeacherListType,
  TeacherType,
} from "@/types";
import React from "react";

interface TableProps {
  columns: { header: string; accessor: string; className?: string }[];
  data:
    | TeacherListType[]
    | StudentType[]
    | ParentType[]
    | SubjectType[]
    | ClassType[]
    | LessonType[]
    | ExamType[]
    | AssignmentType[]
    | ResultType[]
    | AnnouncementType[]
    | EventType[];
  renderRow: (item: any) => React.ReactNode;
}
const Table = ({ columns, data, renderRow }: TableProps) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
