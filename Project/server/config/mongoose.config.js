const mongoose = require("mongoose");

const database = "bakery23"

mongoose.set('runValidators', true);

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Your are moored at dock`))
    .catch((error) => console.log("Whys the rum gone?", error))