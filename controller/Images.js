
const {ImagesModel,ImagesValidate} = require('../Models/ImagesSchema');
const mongoose = require('mongoose');
const getImages = async (req, res) => {
    let Images;
    try {
      Images = await ImagesModel.find();
    } catch (err) {
        return res.send(err.message);
 
    }
    res.json({ Images: Images.map(Images => Images.toObject({ getters: true })) });
  };
const getImagesById = async (req, res) => {
  const ImagesId = req.params._id; // { pid: 'p1' }
  let Images
  try {
    Images = await ImagesModel.findById(ImagesId).exec();
  } catch (err) {
    return res.send(err.message);
  }


  if (!Images) {
    return res.send("Images Not Found");
  }

  res.json({ Images: Images.toObject({ getters: true }) }); // => { place } => { place: place }
};

const createImages = async (req, res) => {
    try {
        let { error } = ImagesValidate(req.body);
        if (error) return res.send(error.message)
        const Images = new ImagesModel(req.body);
        res.send({
          status: "Success",
          message: "New Post Added Successfully",
          info: Images
        });
        await Images.save();
    
      } catch (error) {
        res.send({status:"Error",message:error.message});
    
      }
};
exports.getImagesById = getImagesById;
exports.createImages = createImages;
exports.getImages = getImages;


