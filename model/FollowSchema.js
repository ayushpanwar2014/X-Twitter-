import mongoose from "mongoose";

const FollowSchema = new mongoose.Schema(
    {

        followingId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        followerId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]

    },

    { timestamps: true }
)

const FollowModel = mongoose.models.follow || mongoose.model('Follow', FollowSchema);

export default FollowModel;