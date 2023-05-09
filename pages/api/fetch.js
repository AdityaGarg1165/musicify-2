const SpotifyWebApi = require("spotify-web-api-node")

export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    const SpotifyApi = new SpotifyWebApi({
        redirectUri:"http://localhost:3000/dashboard",
        clientId:"2d619d57084f437aa49f91cf7197f671",
        clientSecret:"d3ba863d303c401c84b3e8dca435704b"
      })
    
      SpotifyApi.authorizationCodeGrant(body.code).then(e=>{

          
          res.status(200).json({AccessToken:e.body.access_token,RefreshToken:e.body.refresh_token,exp:e.body.expires_in})
          SpotifyApi.setAccessToken(e.body.access_token)
        })
    // const srch = await yt.search('no reason')


}
  