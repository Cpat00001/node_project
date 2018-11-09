if(process.env.NODE_ENV === 'production'){
  module.exports = { mongoURI: 'mongodb://<patryk01>:<patryk01>@ds155823.mlab.com:55823/vidjot-prod2'}
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev'}
}