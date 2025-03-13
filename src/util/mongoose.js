module.exports = {
    mang_sang_object: function (mongooses) {
        return mongooses.map((mongose) => mongose.toObject());
    },
    object_sang_object: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
