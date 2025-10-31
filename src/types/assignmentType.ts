import { Assignment } from "@prisma/client";

export type AssignmentType = Assignment & {
  lesson: {
    subject: { name: string };
    teacher: { name: string; surname: string };
    class: { name: string };
  };
};
