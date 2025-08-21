export const BG_IMAGE_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg'
export const NETFLIX_LOGO = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const USER_AVATAR = 'https://i.pinimg.com/736x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg'

export const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk0OGFkN2NmYWJmZTMxMTE1MGYzM2VhN2Y2NjJjNCIsIm5iZiI6MTc1NTM5NjU2Ni40MjEsInN1YiI6IjY4YTEzOWQ2Mzg2N2M3Y2ViYjg2ZmEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuIYAxXlmgE0FDfKkMPvKNMsTeCLukV0NWkTbTtl3Xs'
export const API_KEY = '28948ad7cfabfe311150f33ea7f662c4'
export const MOVIE_VIDEO = 'https://api.themoviedb.org/3/movie/755898/videos?language=en-US'
export const PLAYING_MOVIE_LIST = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
export const POPULAR_MOVIE_LIST = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
export const TMDB_IMG_CDN = 'https://image.tmdb.org/t/p/w200/'
export const GROK_OPEN_AI = 'https://api.groq.com/openai/v1/chat/completions'

export const HEADERS = {
    headers: {
    'Authorization': 'Bearer ' + API_TOKEN,
    'Content-Type': 'application/json'
  }
}
export const SUPPORTED_LANGUAGES = [
  {
    identifier: 'hn',
    name: 'Hindi'
  },
    {
    identifier: 'sp',
    name: 'Spanish'
  },
    {
    identifier: 'en',
    name: 'English'
  }
]
