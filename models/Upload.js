const { Schema, model } = require("mongoose");
const { MINUTE } = require("../helpers/time");

const EXPIRE = MINUTE * 2; // 2 minutes

const uploadsSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true
    },
    extension: {
      type: String,
      trim: true,
      lowercase: true
    },
    expire: {
      type: Number,
      default: EXPIRE
    },
    expired: {
      type: Boolean,
      default: false
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

module.exports = model("Upload", uploadsSchema);
