import http from '../http-common';

export interface IUserData {
  id?: any | null;
  name: string;
  email: string;
  level: number;
  progress: string;
  img: string;
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
}
export default new UserDataService();
