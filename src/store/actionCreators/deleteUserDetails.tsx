const deleteCurrentUser = () => {
  console.log('delete current user ran...')
  return {
    type: 'DELETE_CURRENT_USER',
  }
}

export default deleteCurrentUser;
