export interface TechStack {
  id: number;
  name: string;
}

export interface ProjectData {
  id: number;
  image: string;
  name: string;
  techStack: Array<TechStack>;
  description: string;
  link: string;
}