require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "";

const ROLES = {
    ADMIN: "admin",
    REGISTRAR: "registrar",
    TEACHER: "teacher",
    MAINTENANCE: "maintenance",
    STUDENT: "student",
};

module.exports = {
    PORT,
    ROLES,
    DB_URI,
};
