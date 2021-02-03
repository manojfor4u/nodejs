const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    campaigns: { type: String },
    status: { type: String },
});

module.exports = { Employee };