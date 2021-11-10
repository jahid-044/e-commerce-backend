const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { commentSchema } = require('./schema/commentSchema.js')
const { postsSchema } = require('./schema/postsSchema.js');
const { userSchema } = require('./schema/userSchema.js')
const env = "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment.dbString);

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Posts = mongoose.model("Post", postsSchema);
const Comments = mongoose.model("Comment", commentSchema)
const Users = mongoose.model("User", userSchema)

export { Posts, Comments, Users };