
const {HouseModel,HouseValidate} = require('../Models/HomeSchema');
const mongoose = require('mongoose');
//Get All Houses
const getHouses = async (req, res) => {
    let houses;
    try {
      houses = await HouseModel.find();
    } catch (err) {
        return res.send(err.message);
 
    }
    res.json({ houses: houses.map(house => house.toObject({ getters: true })) });
  };

//Get Houses By Id
const getHouseById = async (req, res) => {
  const HouseId = req.params._id;
  let house
  try {
    house = await HouseModel.findById(HouseId).exec();
  } catch (err) {
    return res.send(err.message);
  }


  if (!house) {
    return res.send("House Not Found");
  }

  res.json({ house: house.toObject({ getters: true }) }); // => { place } => { place: place }
};
//creating a new House
const createHouse = async (req, res) => {
    try {
        let { error } = HouseValidate(req.body);
        if (error) return res.send(error.message)
        const House = new HouseModel(req.body);
        res.send({
          status: "Success",
          message: "New Post Added Successfully",
          info: House
        });
        await House.save();
    
      } catch (error) {
        res.send({status:"Error",message:error.message});
    
      }
    
//   const { type, Address,Age,Rent,Deposit,Parking,Status,Rooms,Pathrooms,Owner} = req.body;

//   const createdHouse = new Place({
//     type, 
//     Address,
//     Age,
//     Rent,
//     Deposit,
//     Parking,
//     Images:"https://images.unsplash.com/photo-1686884575344-9a506e1426f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//     Status,
//     Rooms,
//     Pathrooms,
//     Owner
//   });
//   await createdHouse.save();
//   res.status(201).json({ House: createdHouse });
};

// const updatePlace = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(new HttpError('Invalid inputs passed, please check your data.', 422));
//   }

//   const { title, description } = req.body;
//   const placeId = req.params.pid;

//   let place
//   try {
//     place = await Place.findById(placeId)

//   } catch (err) {
//     const error = new HttpError(
//       'samething went wrong could not updated', 500
//     );
//     return next(error);
//   }
//   if (place.creator.toString() !== req.userData.userId) {
//     const error = new HttpError('You are not allowed to edit this place.', 401);
//     return next(error);
//   }

//   place.title = title;
//   place.description = description;

//   try {
//     await place.save()

//   } catch (err) {
//     const error = new HttpError(
//       'samething went wrong could not updated', 500
//     );
//     return next(error);
//   }

//   res.status(200).json({ place: place.toObject({ getters: true }) });
// };

// const deletePlace = async (req, res, next) => {
//   const placeId = req.params.pid;
//   let place
//   try {
//     place = await Place.findById(placeId).populate('creator');

//   } catch (err) {
//     const error = new HttpError(
//       'some thing went wrong could not delete place',500
//     );
//     return next(error);
    
//   }

// if(!place){
//   const error = new HttpError(
//     'Could not  find place for this Id.',404
//   );
//   return next(error);
// }

// if (place.creator.id !== req.userData.userId) {
//   const error = new HttpError(
//     'You are not allowed to delete this place.',
//     401
//   );
//   return next(error);
// }

// const imagePath = place.image;
//   try {
//     const sess = await mongoose.startSession();
    
//     sess.startTransaction();
//     await place.remove(sess);
//     place.creator.places.pull(place);
//     await place.creator.save(sess);
//     await sess.commitTransaction();
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong, could not delete place.',
//       500
//     );
//     return next(error);
//   }
//   fs.unlink(imagePath, err => {
//     console.log(err);
//   });
//   res.status(200).json({ message: 'Deleted place.' });
// };

exports.getHouseById = getHouseById;
exports.createHouse = createHouse;
exports.getHouses = getHouses;


