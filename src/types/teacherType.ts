import { Class, Subject, Teacher } from "@prisma/client";

export interface TeacherType {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

export type TeacherListType = Teacher & { subjects: Subject[] } & {
  classes: Class[];
};
