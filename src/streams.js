const axios = require('axios');

function getFollowedStreams(authToken) {
  const request = {
    method: 'get',
    url: 'https://api.twitch.tv/helix/streams/followed?user_id=735798790',
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Client-Id': process.env.TWITCH_CLIENT_ID
    }
  };

  axios(request)
    .then(function (response) {
      const data = response.data.data.map(stream => stream.user_name)
      console.log(JSON.stringify(data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function getToken() {

  const request = {
    method: 'post',
    url: process.env.TWITCH_URL,
    headers: {}
  };

  try {
    const response = await axios(request)
    return response.data.access_token
  } catch(error) {
      console.log(error);
      throw error
  }
}

async function main() {
  const token = await getToken()
  getFollowedStreams(token)
}

main()
