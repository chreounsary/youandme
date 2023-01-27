import {Schema, models, model} from 'mongoose';

const profileSchema = new Schema({
  user_id: String,
  display_name: String,
  pic: String,
  is_approved: Boolean,
  profile_completed: String
})

// exting willl updated else create new 
const Profiles = models.profiles || model('profiles', profileSchema);
export default Profiles;