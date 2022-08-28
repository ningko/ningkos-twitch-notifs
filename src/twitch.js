async function getUserToken(code) {
    //TODO: implement me
    return token;
}

async function getUserId(username) {
    //TODO: implement me
    return userId;
}

async function getFollowedStreams(userToken, userId) {
  const request = {
    method: 'get',
    url: `https://api.twitch.tv/helix/streams/followed?user_id=${userId}`,
    headers: {
      'Authorization': 'Bearer ' + userToken,
      'Client-Id': process.env.TWITCH_CLIENT_ID
    }
  };

  try {
    return await axios(request).data.data.map(stream => stream.user_name)
  } catch(e) {
    console.log(e)
    return []
  }
}
