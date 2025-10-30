const mongoose = require('mongoose'); 
// Replace with your actual MongoDB connection string 
const uri = "mongodb+srv://santhoshgurram2006_db_user:aAtxrev1Wigqglf4@fsd-2.bf1ne8q.mongodb.net/?appName=fsd-2"; 
mongoose.connect(uri) 
.then(() => console.log("Connected to MongoDB")) 
.catch(err => console.error(" MongoDB connection error:", err)); 
const userSchema = new mongoose.Schema({ 
name: String, 
email: String, 
age: Number, 
}); 
const User = mongoose.model("User", userSchema); 
async function createUser() { 
const user = new User({ 
name: "CSE", 
email: "CSE@example.com", 
age: 18, 
}); 
await user.save(); 
console.log("User created:", user); 
} 
async function getUsers() { 
const users = await User.find(); // get all users 
console.log("All users:", users); 
} 
async function getUserByEmail(email) { 
const user = await User.findOne({ email }); 
console.log("Found user:", user); 
} 
async function updateUser(email) { 
const user = await User.findOneAndUpdate( 
{ email }, 
{ age: 30 }, // update age to 30 
{ new: true } // return updated document 
); 
console.log("Updated user:", user); 
} 
async function deleteUser(email) { 
const result = await User.deleteOne({ email }); 
console.log("Deleted user:", result); 
} 
async function runCRUD() { 
await createUser(); 
await getUsers(); 
await getUserByEmail("alice@example.com"); 
await updateUser("CSE@example.com"); 
await deleteUser("alice@example.com"); 
await getUsers(); // check remaining 
} 
runCRUD();
