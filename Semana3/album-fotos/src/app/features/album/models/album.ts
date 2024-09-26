import { Photo } from "./photo"

export interface Album {
  userId: number,
  id: number,
  title: string
  thumbnailUrl: string
  photos?: Array<Photo>
}
