export const ProgramsNotificationOptions = [
  "app-only",
  "web-and-app",
  "web-and-email",
  "all-channels",
  "auto",
] as const;
export type IProgramsNotificationOption = (typeof ProgramsNotificationOptions)[number];

export const SummaryNotificationOptions = [
  "no",
  "daily",
  "weekly",
  "monthly",
] as const;
export type ISummaryNotificationOption = (typeof SummaryNotificationOptions)[number];
