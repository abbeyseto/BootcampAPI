const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocoder")

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"]
  },
//   slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"]
  },
  weeks: {
    type: String,
    required: [true, "Please add a number of weeks"]
  },
  tuition: {
    type: Number,
    required: [true, "Please addd a tuition cost"],
  },
  minimumSkill: {
    type: String,
    enum:['beginner', 'intermediate', 'advanced'],
    required: [true, "Please addd a minimum skill"],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// //create bootcamp slug from the name
// BootcampSchema.pre('save', function(next) {
//   // console.log('Slugify ran', this.name);
//   this.slug = slugify(this.name, {lower: true})
//   next()
// })

// //Goecode and create location fields
// BootcampSchema.pre('save', async function (next) {
//   const loc = await geocoder.geocode(this.address);
//   this.location = {
//     type:'Point',
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAddress: loc[0].formattedAddress,
//     street: loc[0].streetName,
//     city: loc[0].city,
//     state: loc[0].stateCode,
//     zipcode: loc[0].zipcode,
//     country: loc[0].countryCode,
//   }
//   // Do not save address in the DB
//   this.address = undefined;
//   next();
// })
 
module.exports = mongoose.model("Course", CourseSchema);
 