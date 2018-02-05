module.exports = {

  database: process.env.DATABASE || 'mongodb://root:abc123@ds125318.mlab.com:25318/goranbt',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'fiverclone22'

};
