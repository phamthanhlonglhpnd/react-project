export interface CommonResponse<T> {
  success: boolean;
  data: T;
  code?: string;
  message?: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  days: number;
  meetings: Meeting[];
}

export interface Meeting {
  id: number;
  userId: number;
  roomId: number;
  startDay: number;
  endDay: number;
  createdAt: string;
}