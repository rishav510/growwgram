export type ApiResponseObject = {
  status: number,
  data?: Array<ResponseDataElement>
}

export type ResponseDataElement = {
  id: string,
  created_at: string,
  description: string,
  location: Location,
  likes: number,
  views: number,
  urls: ImageUrls,
  alt_description: string,
  user: User,
  liked_by_user: boolean,
}

type ImageUrls = {
  raw: string,
  small: string,
}

type User = {
  username: string,
  instagram_username: string,
  profile_image: ProfileImage,
}

type Location = {
  title: string,
}

type ProfileImage = {
  medium: string,
}
