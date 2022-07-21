import mongoose from "mongoose" ; 

const postSchema = new mongoose.Schema(
    {
        modele: {
            type: String,
            required: true
          },
          couleur: {
            type: String,
            required: true
          },
          annee: {
            type: Number,
            required: true
          },
    }
)

export default mongoose.model('Post',postSchema);