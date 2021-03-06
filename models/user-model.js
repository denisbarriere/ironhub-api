'use strict';
/**
 * MIDDLEWARE IMPORT
**/
const mongoose = require('mongoose');
require('mongoose-type-email');
require('mongoose-type-url');


/**
 * COLLECTION DEFINITION
**/
const userSchema = new mongoose.Schema({
  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    required: [true, 'The email is required']
  },
  password: {
    type: String,
    required: [true, 'The password is required']
  },
  gender: {
    type: String,
		enum: ['Male', 'Female']
  },
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  nationality: [String],
  address: String,
  postCode: String,
  city: String,
  country: String,
  phone: String,
  bio: { 
    type: String,
    maxlength: 84
  },
  bioFull: String,
  pictureUrl: { 
    type: mongoose.SchemaTypes.Url,
  },
  socialNetworks: {
    facebook: mongoose.SchemaTypes.Url,
    instagram: mongoose.SchemaTypes.Url,
    skype: String,
    slack: String,
    twitter: String,
  },
  role: {
		type: String,
		enum: ['USER', 'ADMIN'],
		default: 'USER'
	},
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
