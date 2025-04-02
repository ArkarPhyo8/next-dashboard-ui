import { Subject, Teacher } from "@prisma/client";

export type SubjectListType = Subject & { teacher: Teacher[] };
