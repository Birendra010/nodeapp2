const Author =require('../model/authorModel')



const registerAuthor = async (req, res) => {
    try {
      let { name, specialization ,book,price} = req.body;
      if (!name)
        return res.status(400).send({ message: " name is required" });
        if (!book)
        return res.status(400).send({ message: " book is required" });
        if (!price)
        return res.status(400).send({ message: " price is required" });
  
      let savedData = await Author.create(req.body);
      return res
        .status(201)
        .send({ status: true, message: "Success", data: savedData });
    } catch (err) {
      res.status(500).send({ status: false, msg: err.message });
    }
  };


  

  module.exports={registerAuthor}