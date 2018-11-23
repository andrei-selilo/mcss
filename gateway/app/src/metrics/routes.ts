const version = 1

export const ROUTES = {
  ROOT: `/api/v${version}`,
  PATHFINDER: '/pathfinder',
  API_DOCS: {
    ROOT: '/docs',
  },
  HOME: {
    ROOT: '/',
    GET: '/',
    POST: '/',
    PUT: '/'
  },
  AUTH: {
    ROOT: '/auth',
    CREATE_SESSION: '/session',
    REFRESH_TOKENS: '/refresh_tokens',
    CLEAR_SESSION: '/clear_session'
  },
  USERS: {
    ROOT: '/users',
    GET: '/',
    GET_ONE: '/:id',
    GET_ME: '/me',
    POST: '/',
    PUT: '/:id',
  },
  // COMPANIES: {
  //   ROOT: '/companies',
  //   GET: '/',
  //   GET_ONE: '/:id',
  //   POST: '/',
  //   PUT: '/:id',
  // },
  STATIC: {
    ROOT: '/static',
    GET: '/',
  },
  FILES: {
    ROOT: '/files',
    POST_AVATAR: '/profile/:userId',
  },
  LOCALES: {
    ROOT: '/app/:app/locales',
    GET: '/',
    POST: '/',
    GET_ONE: '/:id',
    UPDATE_ONE: '/:id',
    DELETE_ONE: '/:id',
    DELETE_MANY: '/',
    GET_PAGE: '/pages/:entity',
    UPDATE_PAGE: '/pages/:entity',
    DELETE_PAGE: '/pages/:entity',
  },
}
