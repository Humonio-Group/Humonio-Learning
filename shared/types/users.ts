import type { IProgramsNotificationOption, ISummaryNotificationOption } from "#shared/types/notifications";

export interface IUser {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  linkedin?: string;
  picture?: string;
  admin: boolean;
  notifications: {
    programs: IProgramsNotificationOption;
    summary: ISummaryNotificationOption;
  };
}
