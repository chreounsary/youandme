// models for update
// model for create new 
import { Schema, models, model } from 'mongoose';

const userSchema = new Schema({ 
  name: String,
  email: String,
  password: String,
  is_active: Boolean,
  role: String
})

// exting willl updated else create new 
const Users = models?.users || model('users', userSchema);
export default Users
