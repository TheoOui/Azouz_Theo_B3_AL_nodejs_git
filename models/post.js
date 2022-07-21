import mongoose from "mongoose" ; 
import 'dotenv/config' ;


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