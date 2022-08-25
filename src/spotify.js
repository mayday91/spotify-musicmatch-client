export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000"

const clientId = "0dbd526f354d4ca592ac8d1679b57cdd"

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'user-read-playback-position',
  'user-library-modify',
  'user-library-read',
  'streaming', 
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private'
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}
 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&scope=${scopes.join('%20')}&response_type=code&show_dialog=true&redirect_uri=${redirectUri}`