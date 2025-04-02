import { Class, Teacher } from "@prisma/client";

export type ClassListType= Class & { supervisor: Teacher | null }