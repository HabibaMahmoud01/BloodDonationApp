import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const RequestForm = () => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [lastDonationDate, setLastDonationDate] = useState('');
  const [TimeofDloodDonation, setTimeOfdotnation] = useState('');

  const [diseases, setDiseases] = useState('');

  const handleFormSubmit = () => {
    // Handle form submit logic here
  };

  return (
    // <ImageBackground
    //   source={'./assets/AndroidLarge-1.png'}
    // // style={styles.backgroundImage}
    // >
    <View style={styles.container}>


      <Text style={styles.title}>Form Request</Text>


      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />

      <TextInput
        style={styles.input}
        value={bloodGroup}
        onChangeText={setBloodGroup}
        placeholder="Blood Group"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Age"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={lastDonationDate}
        onChangeText={setLastDonationDate}
        placeholder="Last Blood Donation Date"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={diseases}
        onChangeText={setDiseases}
        placeholder="Diseases"
      />
      <TextInput
        style={styles.input}
        value={TimeofDloodDonation}
        onChangeText={setTimeOfdotnation}
        placeholder="Time of Blood Donation"

      />
      {/* <texrInput>
        style={style.input}
        value={jj}
        onChangeText=
      </texrInput> */}
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 745,
    marginRight: 129,
    marginLeft: 20,
  },
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  // },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 10,
  },
  input: {
    width: 315,
    height: 53,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginRight: 33,
    marginLeft: 10,
  },
  button: {
    width: '80%',
    height: 53,
    backgroundColor: '#6F281D',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 33,
    marginLeft: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  Image: {
    height: 880,

  },
});

export default RequestForm;
