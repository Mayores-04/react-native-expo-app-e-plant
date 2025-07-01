// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../../FirebaseConfig";

// const userDoc = await getDoc(doc(db, "users", user.uid));
// if (userDoc.exists()) {
//   const userData = userDoc.data();
//   console.log("Username:", userData.username);
// }

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const user = () => {
  return (
    <View>
      <Text>user</Text>
    </View>
  )
}

export default user

const styles = StyleSheet.create({})