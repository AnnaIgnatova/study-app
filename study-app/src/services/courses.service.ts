import http from '../http-common';
import ICourseData from '../types/course.type';
class CourseDataService {
  getAll() {
    return http.get<Array<ICourseData>>('/courses');
  }
  create(data: ICourseData) {
    return http.post<ICourseData>('/courses', data);
  }
  findByPk(id: string) {
    return http.get<ICourseData>(`/courses/${id}`);
  }
  findByTitle(title: string) {
    return http.post<Array<ICourseData>>('/courses/search', { title });
  }
}
export default new CourseDataService();
