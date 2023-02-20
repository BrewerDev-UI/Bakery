const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password Required"]
    }
}, { timestamps: true });

AdminSchema.statics.signup = async function (email, password) {

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const admin = await this.create({ email, password: hash })

    return admin
}

// static login method
AdminSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const admin = await this.findOne({ email })
    if (!admin) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, admin.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return admin
}

module.exports = mongoose.model('Admin', AdminSchema)