function login(email, password){
  return auth.signInWithEmailAndPassword(email, password);
}

async function checkAdmin(uid){
  let doc = await db.collection("users").doc(uid).get();
  return doc.exists && doc.data().role === "admin";
}

function logout(){
  auth.signOut();
}