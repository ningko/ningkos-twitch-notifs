async function getUserToken(code) {
  const token = {
    method: 'post',
    url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    headers: { }
   };
    
    return token;
  }

async function getUserId(username) {
  const userId = {
    method: 'get',
    url: `https://api.twitch.tv/helix/users?login=${username}`,
    headers: { 
      'Client-Id': process.env.TWITCH_CLIENT_ID, 
      'Authorization': 'Bearer ' + userToken
    }
  };
  
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
