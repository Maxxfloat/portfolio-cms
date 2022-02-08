export interface User {
  user?: UserEntity[] | null;
}
export interface UserEntity {
  id: number;
  userName: string;
  pages: Pages;
  projects: Projects;
  blogs: [];
}
export interface Pages {
  main: Main;
}
export interface Main {
  headline: Headline;
  projects: ProjectsOrAbout;
  about: ProjectsOrAbout;
}
export interface Headline {
  headlineText: string;
  headlineSupport: string;
}
export interface ProjectsOrAbout {
  title: string;
  text: string;
}
export interface Projects {}
