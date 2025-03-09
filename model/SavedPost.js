import mongoose from "mongoose";

const SavedPost = new mongoose.Schema(
    {

        userId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],

        postId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        ]

    },

    { timestamps: true }
)

const SavedModel = mongoose.models.savedpost || mongoose.model('Savedpost', SavedPost);

export default SavedModel;