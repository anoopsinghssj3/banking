const mongoose = require('mongoose');

const conn = () => {
    main()
        .then(() => console.log("mongoose connnected......."))
        .catch(err => console.log(err));

    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/banking');
    }
}

module.exports = conn;
