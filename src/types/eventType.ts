import { Class, Event } from "@prisma/client";

export type EventListType = Event & { class: Class | null };
