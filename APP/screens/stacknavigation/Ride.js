import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { 
  Box,
  Icon,
  Input,
  InputField,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlError,
  HStack,
  VStack,
  Center,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
  Image,
  Pressable,
} from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import { useBackground } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
const { width: ww, height: wh } = Dimensions.get("window");
const MapTheme = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
export default function Ride() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MapView style={styles.map} customMapStyle={MapTheme}/>

      <Box style={styles.formContainer}>
        <VStack space="lg" p={4}>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText  px={ww * 0.02} ff="Inter-Bold" fs={wh * 0.02} color='$text600' >Address</FormControlLabelText>
              </FormControlLabel>
              <Input
              h={wh * 0.045}
              my={wh * 0.002}
              px={ww * 0.02}
              alignItems="center"
              sx={useBackground("Surfaces3")}
            >
           
              <InputField>
                <Text color="$text400"> Search Here</Text>
              </InputField>
            </Input>
            
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText  px={ww * 0.02} ff="Inter-Bold" fs={wh * 0.02} color='$text600' >Where to?</FormControlLabelText>
              </FormControlLabel>
              <Input
              h={wh * 0.045}
              my={wh * 0.002}
              px={ww * 0.02}
              alignItems="center"
              sx={useBackground("Surfaces3")}
            >
           
              <InputField>
                <Text color="$text400"> Search Here</Text>
              </InputField>
            </Input>
            
          </FormControl>
          <Button size="xl" mt={wh * 0.005} action='secondary' onPress={() => navigation.navigate("Checkout")}>
            <ButtonText textAlign='center'>Next</ButtonText>
          </Button>
        </VStack>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: wh * 0.1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  }
});