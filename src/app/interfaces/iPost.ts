export interface IPost {
  id?: number;
  title?: string;
  description?: string;
  content: string;
  categoryId: number;
  userId?: number;
  image: string;
  updatedAt: Date;
  createdAt: Date;
}
