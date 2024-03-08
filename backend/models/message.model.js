import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    content:{
        type: String,
        
    },

    chat:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    attachments:[
        {
            public_id:{
                type: String,
                required: true
            },
              url:{
                   type: String,
                   required: true
              }
        }
    ]
    
});

 const Message= mongoose.model('Message', messageSchema);

export default Message;
