import React, { useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import {Icon, Button } from "native-base";
import * as Location from "expo-location";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MapScreen({navigation}) {
  // const route = useRoute();
  //const route = useRoute();
  const [longitude, setLongitude] = useState();
  const [visible, setVisible] = useState(true);
  const [latitude, setLatitude] = useState();
  const [fires, setFires] = useState([]);
  let exampleArray = {
    markers: [
      {
        title: "hello",
        coordinates: {
          latitude: 3.148561,
          longitude: 101.652778,
        },
      },
      {
        title: "hello",
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449,
        },
      },
    ],
  };

  // let mapMarkers = () => {
  //   return route.params.selectedFires.map((report) => (
  //     <Marker
  //       key={report.id}
  //       coordinate={{
  //         latitude: report.geometry[0].coordinates[0],
  //         longitude: report.geometry[0].coordinates[1],
  //       }}
  //       title={report.title}
  //       description={report.sources.url}
  //     />
  //   ));
  // };

  let checkRelevancy = (updateTime) => {
    let stringTime = JSON.stringify(updateTime);
    return stringTime.indexOf("2022") >= 0;
  };

//   let filterFires = (fire) => {
//     let amendedFires = []
//     for (let i = 0; i < fire.length; i++) {
//       if(checkRelevancy(fire[i].geometry[0].date)){
//         amendedFires.push(fire[i])
//       }
//     }
//     return amendedFires
//   }

  useEffect(() => {
    (async () => {
    //   let { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status === "granted") {
    //     const location = await Location.getCurrentPositionAsync({
    //       accuracy: Location.Accuracy.Balanced,
    //     });
    //     setLongitude(location.coords.longitude);
    //     setLatitude(location.coords.latitude);
    //   } else {
    //     <AnimatedLoader
    //       visible={visible}
    //       overlayColor="#FF5349"
    //       source={require("../../assets/96830-loader-animation.json")}
    //       animationStyle={styles.lottie}
    //       speed={1}
    //     >
    //       <Text>{}</Text>
    //     </AnimatedLoader>;
    //   }
      //console.log(route.params.selectedFires)
    //   await fetch(`https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires`)
    //     .then((response) => response.json())
    //     .then((res) => {
    //       setFires(filterFires(res.events));
    //       console.log(res.events);
    //       console.log("exiting Use Effect");
    //     }).catch((e) => {
    //       console.log(e)
    //     });
    })();
  }, []);


  return latitude && latitude && fires ? (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {fires.map((report) => (
          <Marker
            key={report.id}
            coordinate={{
              latitude: report.geometry[0].coordinates[0],
              longitude: report.geometry[0].coordinates[1],
            }}
            title={report.title}
            description={report.sources.url}
          >
          </Marker>
        ))}
        {/* <Marker
          location={{ longitude: longitude, latitude: latitude }}
          image={require("./navigation.png")}
        /> */}
      </MapView>
    </View>
  ) : (
    <AnimatedLoader
      visible={visible}
      overlayColor="#000"
      // source={require("../../assets/96830-loader-animation.json")}
      animationStyle={styles.lottie}
      speed={1}
    >
      <Text>{}</Text>
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  lottie: {
    width: WP(20),
    height: HP(5),
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    paddingVertical: HP(1.78),
    paddingHorizontal: WP(3.85),
    width: WP(38.46),
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: HP(-3.79),
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: HP(-0.06),
  },
  name: {
    fontSize: HP(1.9),
    marginBottom: HP(0.06),
  },
  image: {
    width: "100%",
    height: HP(9.48),
  },
});

/** import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
}); */