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
}

class UserDataService {
  signIn() {
    return http.post<IUserData>(`/users/signin`, { email: 'email2', password: 'pass2' });
  }
  signUp() {
    return http.post<IUserData>('/users/signup', {
      email: 'email2',
      password: 'pass2',
      img: 'ss',
      progress: 'sss',
      level: 1,
      courses: 'ss',
    });
  }
  logOut() {
    return http.get<IUserData>('/users/logout');
  }
  findUser(email: string) {
    return http.post<IUserData>(`/users/user`, { email });
  }
}
export default new UserDataService();
