let mongo=require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName ="students"

mongo.MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,res)=>{

    let db = res.db("students")

    // db.collection(databaseName).insertOne({Firstname:"dror",LastName:"ben yaakov",id:"316048750"}).then(value=>{
    //     console.log("insert succssefly")
    // }).catch(err=>{
    //     console.log("somthing went wrong")
    // })
    
    // db.collection(databaseName).insertMany([{
    //     Firstname:"naor",
    //     LastName:"ben yakkov",
    //     id:"111111111"
    // },{
    //     Firstname:"roy",
    //     LastName:"cohen",
    //     id:"22222222"
    // },{
    //     Firstname:"josh",
    //     LastName:"levi",
    //     id:"33333333"
    // }]).then(val=>{
    //     console.log(val)
    // }).catch(err=>{
    //     console.log(err)
    // })

    // db.collection(databaseName).find({LastName:"ben yaakov"}).toArray((err,val)=>{
    //     console.log(val)
    // })

    // db.collection(databaseName).findOne({Firstname:"naor"}).then(val=>{
    //     console.log(val)
    // })

    // db.collection(databaseName).updateMany({FirstName:"naor",LastName:"ben yaakov"},{
    //     $set:{
    //         LastName:"levi"
    //     }
    // })
    
    // db.collection(databaseName).remove({FirstName:"dror"},(err,res)=>{
    //     console.log(res)
    // })

    })
