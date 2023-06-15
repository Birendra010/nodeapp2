const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const user = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    if (!name) return res.status(400).send({ message: " name is required" });
    if (!email) return res.status(400).send({ message: " email is required" });
    if (!password)
      return res.status(400).send({ message: " password is required" });

    let existEmail = await userModel.findOne({ email: email });
    if (existEmail) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "User with this email is already registered",
        });
    }
    let savedData = await User.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

const loginUser = async function (req, res) {
  try {
    const email = req.body.email;
    const Password = req.body.password;
    if (!email) {
      return res.status(400).send({ msg: "email is not present" });
    }
    if (!Password) {
      return res.status(400).send({ msg: "Password is not present" });
    }
    let user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ status: false, msg: "email or Password is not corerct" });
    }
    let token = await jwt.sign({ email: user.email }, "my-self-key");
    return res.status(200).send({ status: true, token: token });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { user, loginUser };
