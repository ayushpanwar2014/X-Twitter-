import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        desc: {
            type: String,
        },

        img: {
            type: String,
        },

        video: {
            type: String,
        },

        isSensitive: {
            type: Boolean,
            default: false
        },

        idUser: {
            type: String,
            required: true
        },

        //User Relations

        userId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

    },
    { timestamps: true }
)

const PostModel = mongoose.models.post || mongoose.model('Post', PostSchema);

export default PostModel;