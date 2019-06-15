const mongoose = require("mongoose")
const db = require("../db/connection")

const villesSchema = new mongoose.Schema({
    name: String
  })

  const Villes = db.model('Villes', villesSchema)

  module.exports = Villes