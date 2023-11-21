import { StyleSheet, Text, View, Image } from 'react-native';
import Color from './Constraint/Color';
import Images from './Constraint/Images';
import { useFonts } from 'expo-font';
import { SIZES, FONTS } from './Constraint/Themes';
import { StatusBar } from 'react-native';

export default function App() {

  const [loaded] = useFonts({
    // Montserrat: require('./assets/fonts/Yatra-One.ttf'),
       Black: require('./assets/font/Lato-Black.ttf'),
       Blackitalic : require('./assets/font/Lato-BlackItalic.ttf'),
       Bold : require('./assets/font/Lato-Bold.ttf'),
       Bolditalic : require('./assets/font/Lato-BoldItalic.ttf'),
       Light : require('./assets/font/Lato-Light.ttf'),
       LightItalic : require('./assets/font/Lato-LightItalic.ttf'),
       Regular : require('./assets/font/Lato-Regular.ttf'),
       Thin : require('./assets/font/Lato-Thin.ttf'),
       ThinItalic : require('./assets/font/Lato-ThinItalic.ttf'),
       Bold : require('./assets/font/Lato-Bold.ttf')

  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
    </View>
  );
}

const styles = StyleSheet.create({

});
