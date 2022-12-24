import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SetName} from '../redux/action';
import {SetAge} from '../redux/action';
import {styles} from './styles';

export default HomeScreen = ({navigation}) => {
  const onDetailsScreen = () => {
    if (!GeneralResponse.name && GeneralResponse.age) {
      alert('Please enter name');
    } else if (GeneralResponse.name && !GeneralResponse.age) {
      alert('Please enter age');
    } else if (!GeneralResponse.name && !GeneralResponse.age) {
      alert('Please fill all empty fields');
    } else navigation.navigate('DetailsScreen');
  };
  const dispatch = useDispatch();
  const {GeneralResponse} = useSelector(state => state);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello Home Screen</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.text}>
          Name: {GeneralResponse.name} Age:{GeneralResponse.age}
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="What is your Name"
          value={GeneralResponse.name}
          onChangeText={name => dispatch(SetName(name))}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.inputContainer2}
          placeholder="What is your Age"
          value={GeneralResponse.age}
          onChangeText={age => dispatch(SetAge(age))}
        />
        <View style={styles.buttonContainer}>

      <Button
        title="Go to Details Screen"
        onPress={onDetailsScreen}
        />
        </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.linkedin.com/in/ermanaykut/');
        }}>
        <Image
          style={styles.imageContainer}
          source={require('../assets/linkedin.png')}
          />
      </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};
