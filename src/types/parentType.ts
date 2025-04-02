import { Parent, Student } from "@prisma/client";

export type ParentListType = Parent & { students: Student[] };
