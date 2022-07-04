class UserService {
  async create(user) {
    console.log(user);
    //讲用户存储到数据库中
    return "创建成功"
  }
}

module.exports = new UserService()