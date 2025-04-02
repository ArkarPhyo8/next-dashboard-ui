import {  Lesson, } from "@prisma/client";

export type lessonListType = Lesson & { subject: { name: string } } & {
  class: { name: string };
} & { teacher: { name: string; surname: string } };
