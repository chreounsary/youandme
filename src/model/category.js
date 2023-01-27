// models for update
// model for create new 
import { Schema, models, model } from 'mongoose';

const categorySchema = new Schema({ 
  name: String
})

// exting willl updated else create new 
const Categories = models?.category || model('categories', categorySchema);
export default Categories


// export default models?.category || model("category", categorySchema);