// import boom from 'boom'

export const errorHandler = () => (err, req, res, next) => {
  if (!err) next()
  let error
  if (!err.isBoom) {
    // error = boom.badImplementation(err)
    // error.output.payload.message = err.message
    error = { output: { payload: { message: err.message } } }
  } else {
    error = err
  }
  const { payload } = error.output
  res.status(payload.statusCode).send({
    status: payload.statusCode,
    error: payload.error,
    message: payload.message,
  })
}
