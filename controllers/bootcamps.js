const Bootcamp = require("../models/Bootcomp");

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Showing all bootcamps" });
};

//@desc     Get a single bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Showing a bootcamp ${req.params.id}` });
};

//@desc     Create new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    sucess: true,
    msg: `Created a bootcamp`,
    data: bootcamp,
  });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err
    })
  }
  
};

//@desc     Update a bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Updated bootcamp ${req.params.id}` });
};

//@desc     Delete a bootcamp
//@route    DEL /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Deleted bootcamp ${req.params.id}` });
};
