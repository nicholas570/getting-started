import * as WebBrowser from 'expo-web-browser';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center'
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15,
    backgroundColor: 'tomato'
  },
  helpLinkText: {
    textAlign: 'center'
  }
});

export const EditScreenInfo = ({ path }: { path: string }) => {
  const handleHelpPress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet');
  };

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Open up the code for this screen:</Text>
        <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <Text>{path}</Text>
        </View>
        <Text style={styles.getStartedText}>Change any of the text, save the file, and your app will automatically update.</Text>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText}>Tap here if your app doesn't automatically update after making changes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helpContainer}>
        <Button title="AuScour" onPress={handleHelpPress} />
      </View>
    </View>
  );
};
