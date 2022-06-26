import http from '../http-common';

export interface IUserData {
  id?: any | null;
  name: string;
  email: string;
  level: number;
  progress: string;
  img: Blob;
  courses: string;
  password: string;
  accessToken?: string;
}

class UserDataService {
  signIn(data: any) {
    return http.post<IUserData>(`/auth/signin`, { ...data });
  }
  signUp(data: any) {
    return http.post<IUserData>('/auth/signup', { ...data });
  }
  findUser(id: string) {
    return http.get<IUserData>(`/user/${id}`);
  }
  changeData(id: string, type: string, value: any) {
    return http.post<IUserData>(`/user/${id}`, { type, value });
  }
}
export default new UserDataService();
