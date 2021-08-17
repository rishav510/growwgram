type UserData = {
  firstName: string,
  lastName: string,
  followers: number,
  following: number,
  bio: string,
  profilePic: string,
  photos: Array<Image>,
  username: string,
  posts: number,
}

type Image = {
  id: string,
  url: string,
}

export default UserData;
