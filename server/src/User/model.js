const { Schema, model } = require("mongoose");
const { ROLES } = require("../constants");

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        controlNumber: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            enum: Object.keys(ROLES).map((key) => ROLES[key]),
            default: ROLES.STUDENT,
        },
        deletedAt: {
            type: String,
            default: null,
        },
    },
    { timestamps }
);

module.exports = model("User", UserSchema);
