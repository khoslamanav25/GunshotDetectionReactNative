import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import React, {useEffect, useState} from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Firebasekeys from "./../../config";
let firebaseConfig = Firebasekeys;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var user = firebase.auth().currentUser;

export default function App() {
    const [address, setAddress] = useState(null);
    const [emergencyContact, setEmergencyContact] = useState(null);
    const [emergencyPN, setEmergencyPN] = useState(null);
    const [pn, setPN] = useState(null);
    const [message, setMessage] = useState(null)

    const RefreshInformation =  () => {
        // const user = firebase.auth().currentUser;
        var docRef = firebase.firestore().collection("userInformation").doc(`${user.uid}`);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    setAddress(doc.data().address)
                    setEmergencyContact(doc.data().emergencyContactName)
                    setEmergencyPN(doc.data().emergencyContactNumber)
                    setPN(doc.data().phoneNumber)
                    setMessage("Success!")
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
                setMessage("Error")
            });
    }

    useEffect(() => {
        // const user = firebase.auth().currentUser;

        if(!address){
            var docRef = firebase.firestore().collection("userInformation").doc(`${user.uid}`);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    setAddress(doc.data().address)
                    setEmergencyContact(doc.data().emergencyContactName)
                    setEmergencyPN(doc.data().emergencyContactNumber)
                    setPN(doc.data().phoneNumber)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    })

    const uploadData = async() => {
        firebase.firestore()
        .collection('userInformation').doc(`${user.uid}`).set({
          name: `${user.displayName}`,
          emergencyContactName: emergencyContact,
          emergencyContactNumber: emergencyPN,
          address: address,
          phoneNumber: pn,
        })
      }

  return (
    <View style={styles.container}>
      <Text>Your Current Data:</Text>
      <StatusBar style="auto" />
      <KeyboardAvoidingView behavior="padding" style={styles.form}>
        <TextInput
            value={emergencyContact}
            onChangeText={(data) => setEmergencyContact(data)}
            placeholder={'Emergency Contact Name'}
            style={styles.input}
        />
        <TextInput
            value={emergencyPN}
            onChangeText={(data) => setEmergencyPN(data)}
            placeholder={'Emergency Phone Number All Numbers'}
            style={styles.input}
        />
        <TextInput
            value={pn}
            onChangeText={(data) => setPN(data)}
            placeholder={'Your Phone Number All Numbers'}
            style={styles.input}
        />
        <TextInput
            value={address}
            onChangeText={(data) => setAddress(data)}
            placeholder={'Your Address'}
            style={styles.input}
        />
        <Button title="Submit" onPress={() => {
            setMessage("")
            uploadData()
            RefreshInformation()
        }}/>
        <Text>{message}</Text>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});