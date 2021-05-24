function auth(req, res, next){
    if (!req.session.estaAutenticado) {
        res.sendStatus(401)
    } else {
        next()
    }
  }

module.exports = auth;