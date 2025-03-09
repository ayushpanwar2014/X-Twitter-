import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {

        email: {
            type: String,
            required: true,
            unique: true
        },

        username: {
            type: String,
            unique: true,
            required: true
        },

        displayname: {
            type: String,
        },

        bio: {
            type: String
        },

        location: {
            type: String
        },

        job: {
            type: String
        },

        website: {
            type: String
        },

        img: {
            type: String
        },

        cover: {
            type: String
        },

        //Post Relations
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            }
        ]
    },

    {
        timestamps: true
    }
)

const UserModel = mongoose.models.user || mongoose.model('User', UserSchema);

export default UserModel;