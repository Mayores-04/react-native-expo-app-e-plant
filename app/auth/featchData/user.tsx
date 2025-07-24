// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../../FirebaseConfig";

// const userDoc = await getDoc(doc(db, "users", user.uid));
// if (userDoc.exists()) {
//   const userData = userDoc.data();
//   console.log("Username:", userData.username);
// }

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '@/components/ThemedView'

const user = () => {
  return (
    <ThemedView className='flex-1'>
      <Text>user</Text>
    </ThemedView>
  )
}

export default user
