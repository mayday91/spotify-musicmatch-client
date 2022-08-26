export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE TOKEN AFTER DONE CODING
  // token: 'BQBmGqCvvSW8kDLWPQTTS8SIZe8Dg576pAL_K9Je3L-oM-0QNdYphiPwuZVLnxCDglv4WReUk_5KFgCZsbIAG3VOrfYzL29GAgzYSqVy9AjwWQUQiF-mBGRcemExR3AXJX_pHzyGLqlite0_o5AKq8oyDmL8mFv_Y8307_sAk0f735LNgbx7rXizUVE7s2DOyJCQ_xnI211GLkSzf4_oTSHVygbX5YM_sX_j3nXpEflyz0p7vEFqnGEFXBnFUUr7znw_Ep-fP8qn9Rk9qeinJD8S3nvNsUV6pWg',
}

export const reducer = (state, action) => {
  console.log(action)

  switch (action.type) { 
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
        }
    case 'SET_PLAYLISTS': 
      return {  
        ...state,
        playlists: action.playlists,
      }
      case 'SET_PLAYING':
        return {
          ...state,
          currentPlaying: action.currentPlaying,
        };
      case 'SET_PLAYER_STATE':
        return {
          ...state,
          playerState: action.playerState,
        };
      case 'SET_PLAYLIST':
        return {
          ...state,
          selectedPlaylist: action.selectedPlaylist,
        };
      case 'SET_PLAYLIST_ID':
        return {
          ...state,
          selectedPlaylistId: action.selectedPlaylistId,
        };    
        
    default:
        return state
  }
}

