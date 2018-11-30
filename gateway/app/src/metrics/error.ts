export const ERRORS = {
  EMAIL_REQUIRED: 'error.email.required',
  NAME_REQUIRED: 'error.name.required',
  UNSUPPORTED_PARAMS: 'error.unsupported.params',
  USER: {
    EXISTS: 'error.user.exists',
    NOT_FOUND: 'error.user.not.found',
    INVALID: 'error.user.unexpected.data',
  },
  AUTH0: {
    CREATE: 'error.create.user',
  },
  FILES: {
    BAD_REQUEST: 'error.files.bad.data',
    UPLOAD_FAILED: 'error.files.failed.to.upload'
  },
  COMPANY: {
    ADMIN_REQUIRED: 'error.company.admin.required',
    COMPANY_EXISTS: 'error.company.exists',
  },
  UNAUTHORIZED: 'error.user.unauthorized',
  INVALID_CREDENTIALS: 'error.invalid.credentials',
  APP: {
    ALREADY_EXISTS: 'error.app.already.exists',
    MISSING_REQUIRED_FIELDS: 'error.app.missing.fields',
  },
  LOCALE: {
    ALREADY_EXISTS: 'error.locale.already.exists',
    MISSING_REQUIRED_FIELDS: 'error.locale.missing.fields',
    INVALID_APPLICATION_NAME: 'error.locale.invalid.app.name.provided',
    INVALID_DATA_PROVIDED: 'error.locale.invalid.data.provided',
    UNSUPPORTED_APPLICATION_PROVIDED: 'error.locale.unsupported.app',
    UNSUPPORTED_LANGUAGES_PROVIDED: 'error.locale.unsupported.language',
    UNSUPPORTED_ENTITY_PROVIDED: 'error.locale.unsupported.entity',
    SEED_SUPPORT_ONE_APPLICATION: 'error.locale.seed.support.adding.to.single.app',
  }
}