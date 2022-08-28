
export function getUserAuthorizationUrl() {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const baseUrl= "https://id.twitch.tv/oauth2/authorize";
    const redirectUri = "http://localhost:3000";
    const scope = "user%3Aread%3Afollows";
    return `${baseUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
}