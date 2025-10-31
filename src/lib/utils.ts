import { auth } from "@clerk/nextjs/server";

export const getSession = async () => {
  const { sessionClaims, userId } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  return { role, userId };
};

const currentWorkWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const startOfWeed = new Date(today);
  if (dayOfWeek === 0) {
    startOfWeed.setDate(today.getDate() + 1);
  } else if (dayOfWeek === 6) {
    startOfWeed.setDate(today.getDate() + 2);
  } else {
    startOfWeed.setDate(today.getDate() - (dayOfWeek - 1));
  }

  startOfWeed.setHours(0, 0, 0, 0);

  return startOfWeed;
};

export const adjustScheduleToCurrentWeek = (
  lesson: { title: string; start: Date; end: Date }[]
): { title: string; start: Date; end: Date }[] => {
  const startOfWeed = currentWorkWeek();

  return lesson.map((lesson) => {
    const lessonDayOfWeek = lesson.start.getDay();
    const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;
    const adjustedStartDate = new Date(startOfWeed);
    adjustedStartDate.setDate(startOfWeed.getDate() + daysFromMonday);
    adjustedStartDate.setHours(
      lesson.start.getHours(),
      lesson.start.getMinutes(),
      lesson.start.getSeconds()
    );

    const adjustedEndDate = new Date(adjustedStartDate);
    adjustedEndDate.setHours(
      lesson.end.getHours(),
      lesson.end.getMinutes(),
      lesson.end.getSeconds()
    );

    return {
      title: lesson.title,
      start: adjustedStartDate,
      end: adjustedEndDate,
    };
  });
};
