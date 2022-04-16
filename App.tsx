import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
interface propsCoords {
  latitude: number
  longitude: number
  description: string
}

const initialProps = {
  latitude: -22.0905194,
  longitude: -51.3729107,    
  description: ''
}

export default function App() {
  const [dataPointA, setDataPointA] = useState<propsCoords>(initialProps)
  const [dataPointB, setDataPointB] = useState<propsCoords>(initialProps)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='auto'/>
      
      <View style={styles.footer}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f2f2f2',
  },
  map: {   
    flex: 1, 
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  button: {
    backgroundColor: 'green',
    margin: 10,
    borderRadius: 50,    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#f2f2f2'
  },
  informations: {
    paddingHorizontal: 20,    
    marginBottom: 12,
    marginHorizontal: 20,
    backgroundColor: '#c9c9c9',
    borderRadius: 50,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 50,    
  },
});
