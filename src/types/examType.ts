import { Exam } from "@prisma/client";

export type ExamListType = Exam & {
  lesson: {
    subject: { name: string };
    teacher: { name: string; surname: string };
    class: { name: string };
  };
};
