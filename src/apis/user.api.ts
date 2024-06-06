import axiosClient from "../configs/axiosClient";
import { CommonResponse } from "../types/common.type";

const userApi = {
  getUsers(page: number): Promise<CommonResponse> {
    const url = `user/get-all?page=${page}`;
    return axiosClient.get(url);
  },
};

export default userApi;
