const mongoose =require(`mongoose`)


const service=mongoose.Schema({
    name:{type :String},
    desc:{type:String},
    status:{type:Number},
    category:{type:String},
    isActive:{type:Number,default:1}
    // 1=> active ,2=>disable,3=> deleted
    
},
{ timestamps: true }
)

var serviceModel = mongoose.model('service', service);

module.exports={
    serviceModel
}