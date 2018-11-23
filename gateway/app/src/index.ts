import app from './app'
// import mongoConnect from './config/mongoose'

(async () => {
  const port = process.env.PORT || 3000;
  // await mongoConnect();

  app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
  });
})();
