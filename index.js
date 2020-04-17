const admin = require('firebase-admin');

//this is confidential
const serviceAccount = require('./cred.json');

// init the app
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL: "https://projectalamnac.firebaseio.com"

});


// init the database
// this thing change in the new 
const db = admin.firestore();


// now add the collection in nosql/ table in sql

db.collection('users').add({
    // this is json
    name:"tanvir rahman and nisorgo apu team",
    email:"hello_friend@gmail.com",
    age:25

})





// the set method
// one different between add and set is 
// you can select the collection explicitly

db.collection("users")
.doc()
.set({
    name: "nishorgo niger",
    email: "test@test.com",
    age:25
})



// this is the update function

db.collection("users")
.doc("emQ76rGERYUnWxDi3eV7")
.set({
    name:"tanvir rahman ornob"
})



// this is the update function
// with merge
// means adding more field
db.collection("users")
.doc("emQ76rGERYUnWxDi3eV7")
.set({
    name:"tanvir rahman ornob",
    age:32
},
    {merge:true}
)


// the delete function 
// have a callback handler

db.collection('users')
.doc("emQ76rGERYUnWxDi3eV7")
.delete()
// avoid callback hell problem
// i use arrow function
// dont use the traditional
// its confusing
.then(()=>{
    console.log("document deleted");
})
.catch((error)=>{
    console.log(error);
});


// deleting a specfic field

const fieldvalue = admin.firestore.FieldValue;
db.collection('users')
.doc('ndQ2KOGqbDVbUvPOHMNv')
.update({
    name: fieldvalue.delete()
})



// addmultiple user at the same time
// create the userjson object
// json under list


var users = [{
    name: "Raja",
    email: "raja.tamil@email.com",
    createdAt: new Date("2019-01-01 12:08:00")
},
{
    name: "Arivu",
    email: "arivu.selvan@email.com",
    createdAt: new Date("2018-01-23 09:13:00")
}, {
    name: "Mike",
    email: "mike.author@email.com",
    createdAt: new Date("2018-08-08 06:37:00")
}, {
    name: "Praba",
    email: "praba.karan@email.com",
    createdAt: new Date("2018-10-09 18:26:00")
},
{
    name: "Muhammad",
    email: "muhammad.ali@email.com",
    createdAt: new Date("2018-03-13 12:13:00")
}

];



// loop through the users

users.forEach(user=>{
    db.collection("users")
    .doc()
    .set(user);
})




// get the user 

db.collection("users")
.get()
// callback hell
// send you a snapshot
// you can loop through the snapshot
// and another callback will used to log information
.then(snap=>{
    snap.forEach(doc=>{
        console.log(doc.data());
    });
});