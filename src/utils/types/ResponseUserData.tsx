type ResponseUserData = {
  first_name: string,
  last_name: string,
  followers_count: number,
  following_count: number,
  profile_image: ProfileURLs,
  bio: string,
  photos: Array<Image>,
  username: string,
  total_photos: number,
};

type ProfileURLs = {
  large: string,
};


type Image = {
  id: string,
  urls: ImageURLs,
}

type ImageURLs = {
  raw: string,
  small: string,
}

export default ResponseUserData;
