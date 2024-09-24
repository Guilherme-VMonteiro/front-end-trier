import { Photo } from "./photo"

export interface Album {
  userId: number,
  id: number,
  title: string
  img?: string
  photos?: Array<Photo>
}
