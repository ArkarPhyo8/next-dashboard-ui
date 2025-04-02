import { Class, Student } from "@prisma/client";

export interface StudentType {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
}

export type StudentListType = Student & {class: Class}