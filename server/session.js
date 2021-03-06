const expressSession = require("express-session")
const MongoStore = require("connect-mongo")(expressSession)
const db = require("./db")
const { sessionSecret } = require("./constants/env")

const store = new MongoStore({ mongooseConnection: db })

const session = expressSession({
  secret: sessionSecret,
  store,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 93312000000
  }
})

module.exports = session
