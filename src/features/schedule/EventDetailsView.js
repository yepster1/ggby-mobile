import React from "react";
import { map } from "ramda";

import { ScrollView, View, Text, Image } from "react-native";

import styles from "./EventDetailsView.style";

const event = {
  title: "Slackro",
  details:
    "You may have tried Acroyoga before, but perhaps you haven't tried the type of acroyoga that's designed specifically for YOUR strengths. Slackro is a type of acroyoga that utilizes the sort of balance and focus skill that you EXCEL at because of your slackline practice. Come balance and wiggle on other humans in between wiggling on one-inch bridges.",
  picRef: "slackro",
  instructors: [
    {
      name: "Michelle",
      picRef: "michelle"
    },
    {
      name: "Alex",
      picRef: "alex"
    },
    {
      name: "Brian",
      picRef: "brian"
    }
  ]
};

// TODO: Extract into own service
const eventPicMap = {
  slackro: require("../../../assets/images/events/slackro.jpg")
};

// TODO: Extract into own service
const instructorPicMap = {
  michelle: require("../../../assets/images/events/slackro.jpg"),
  alex: require("../../../assets/images/events/slackro.jpg"),
  brian: require("../../../assets/images/events/slackro.jpg")
};

export default ({ navigation }) => (
  // TODO: Uncomment this.
  // const event = navigation.getParam("event");

  <ScrollView>
    <Image style={styles.eventImage} source={eventPicMap[event.picRef]} />

    <View style={styles.contentContainer}>
      <Text style={styles.titleText}>{event.title}</Text>
      <Text style={styles.normalText}>{event.details}</Text>

      <View style={styles.instructorsSection}>
        <Text style={styles.secondaryTitleText}>Taught by:</Text>

        <View style={styles.instructorListView}>
          {map(
            ({ name, picRef }) => (
              <View style={styles.instructorView} key={picRef}>
                <Image
                  style={styles.instructorImage}
                  source={instructorPicMap[picRef]}
                />

                <Text style={styles.normalText}>{name}</Text>
              </View>
            ),
            event.instructors
          )}
        </View>
      </View>
    </View>
  </ScrollView>
);
