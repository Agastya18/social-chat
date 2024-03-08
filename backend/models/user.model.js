import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    avatar:{
       public_id:{
           type: String,
           required: true
       },
         url:{
              type: String,
              required: true
         }
    },
    

},{
    timestamps: true
});


// password hashing before saving
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// matching password function
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}
//genrating access token for user
userSchema.methods.getAccessToken = function(){
    return jwt.sign({id: this._id}, process.env.TOKEN_SECRET, {expiresIn: "15d",
   
   
    },
    
    )
}


 const User= mongoose.model('User', userSchema);

export default User;

