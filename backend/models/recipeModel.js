import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    title: {
      type: String,
      required: true
    },

    calorieCount: {
      type: String,
      
    },
    cookingInstruction: {
      type: String,
     
    },
    
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;