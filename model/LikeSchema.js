import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema(
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
    {timestamps: true}
)

const LikeModel = mongoose.models.like || mongoose.model("Like", LikeSchema);

export default LikeModel;