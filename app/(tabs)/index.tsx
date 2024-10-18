import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';

const diseases = [
  'Fibrose Cística',
  'Doença de Gaucher',
  'Doença de Pompe',
  'Esclerose Lateral',
  'Doença de Huntington',
  'Síndrome de Prader-Willi',
  'Epidermólise Bolhosa',
    
];

const DiseaseList = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          <Text style={styles.careText}>Care</Text>
          <Text style={styles.mapText}>map</Text>
        </Text>
        <View style={styles.headerLine} />
      </View>
      {diseases.map((disease, index) => {
        const scale = useRef(new Animated.Value(1)).current;

        const handlePressIn = () => {
          Animated.spring(scale, {
            toValue: 1.1, 
            friction: 3,
            useNativeDriver: true,
          }).start();
        };

        const handlePressOut = () => {
          Animated.spring(scale, {
            toValue: 1, 
            friction: 3,
            useNativeDriver: true,
          }).start();
        };

        return (
          <View key={index} style={styles.buttonContainer}>
            <Animated.View style={{ transform: [{ scale }] }}>
              <TouchableOpacity
                style={styles.button}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => console.log(`Selecionado: ${disease}`)}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>{disease}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -7,
  },
  careText: {
    color: '#226752',
    fontWeight: '700',
  },
  mapText: {
    color: '#000',
    fontWeight: '300',
  },
  headerLine: {
    width: '90%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },
  buttonContainer: {
    marginVertical: 9,
  },
  button: {
    backgroundColor: '#619C95',
    borderRadius: 35,
    paddingVertical: 17,
    paddingHorizontal: 30,
    alignItems: 'center',
    overflow: 'hidden', 
    minWidth: 200, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DiseaseList;

