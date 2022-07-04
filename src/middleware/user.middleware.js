const errorType = require('../constants/error-types')

const verifyUser = async (ctx, next) => {
  //获取用户名和密码
  const {name, password} = ctx.request.body

  //判断用户名或密码不等于空
  if (!name || !password || name === '' || password === '') {
    const err = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  //判断这次用户名是没有被注册过的


  await next()
}

module.exports = {
  verifyUser
}