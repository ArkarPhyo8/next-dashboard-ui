import { Announcement, Class } from "@prisma/client";

export type AnnouncementListType = Announcement & { class: Class | null };
