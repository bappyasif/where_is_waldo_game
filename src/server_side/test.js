let db = firebase.firestore();

db.collection('test').doc('test').get().then(()=>"success!!").catch(err=>console.log("error!!", err));

let creatingCollection = () => {
    // db.collection('test').add({test:'test'}).then(()=>console.log('success!!')).catch(err=>console.log('error!!', err));
    db.collection('test').doc('test').set({test:'test'}).then(()=>console.log('success!!')).catch(err=>console.log('error!!', err));
}
creatingCollection();