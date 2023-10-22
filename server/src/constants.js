require("dotenv").config();

const PORT = process.env.PORT || 3000;

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
};
