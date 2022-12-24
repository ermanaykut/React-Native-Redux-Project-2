import {Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default DetailsScreen = () => {
  const navigation = useNavigation();
  const {GeneralResponse} = useSelector(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Details Screen</Text>
      </View>
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.text}>
            Dear {GeneralResponse.name}, your age is {GeneralResponse.age}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Go Back" onPress={navigation.goBack} />
        </View>
      </View>
    </SafeAreaView>
  );
};
