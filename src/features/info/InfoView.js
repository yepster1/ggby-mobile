import React from "react";

import { ScrollView, View, Text } from "react-native";
import Markdown from "react-native-simple-markdown";

import styles from "./InfoView.style";

class InfoView extends React.Component {
  cacheScrollView = ref => {
    this.scrollView = ref;
  };

  indexPosition = index => ({ nativeEvent: { layout } }) => {
    this.positions[index] = layout.y;
  };

  render() {
    return (
      <ScrollView ref={this.cacheScrollView}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.primaryHeading}>First Timers</Text>
          </View>

          <Text style={styles.primaryHeading}>Logistics & Essentials</Text>
          <Text style={styles.primaryHeading}>Spirit & Values</Text>
          <Text style={styles.primaryHeading}>Getting to the Fruit Bowl</Text>

          <View>
            <Text style={styles.primaryHeading}>Town Services</Text>

            <Text style={styles.secondaryHeading}>
              Medical and Emergency Services
            </Text>

            <Markdown styles={styles}>
              - **Hospital**: Moab Regional Hospital is the nearest hospital
              located at 450 Williams Way, Moab, UT 84532. Phone:
              (435)-719-3500.
              {"\n"}- **Pharmacies**: The nearest pharmacies are Walker Drug
              Company at 290 S Main St, Moab, UT 84532 (435-259-5959) and City
              Market Pharmacy at 425 S Main St, Moab, UT 84532 (435 259-8971).
              {"\n"}- **Dentists**: There are a few dental clinics in the area.
              Arches Dental Clinic at 570 W 400 N, Moab (435-259-4333), Red Rock
              Dental at 380 N 500 W, Moab (435-259-4059), and Hugentobler
              Merrill M DDS at 757 N Main St, Moab (435-259-7418) to name a few.
              {"\n"}- **Police**: The Moab Police Department is located at 217 E
              Center St # 130, Moab, UT 84532 . Phone: (435) 259-8938.
            </Markdown>

            <Text style={styles.secondaryHeading}>General Services</Text>

            <Markdown styles={styles}>
              - **General Information***: The Moab Information Center is a great
              resource for information about the area. They are located at 25 E
              Center St, Moab. Phone:(435) 259-8825.
              {"\n"}- **Food and Beverages**: City Market is a supermarket to
              get food and beverages and other shopping items. They are located
              at 425 S Main St, Moab. Phone: (435) 259-5181. The Village Market
              is another supermarket located at 702 S Main St, Moab. Phone:
              (435) 259-3111.
              {"\n"}- **Gas**: There are various gas stations in the area. City
              Market Fuel Center is right next to City Market located at 425 S
              Main St, Moab, UT. Phone: (435) 259-5181
              {"\n"}- **Banks and ATMs**: There are various banks and ATMs in
              the Moab area. Zions Bank ATM is located in City Market at 425 S
              Main St, Moab, UT.
              {"\n"}- **Showers**: The Moab Recreation and Aquatic Center is a
              great place to get a cheap shower (~$4). They are located at 374 N
              Park Ave, Moab. Phone: (435) 259-8226. Climbing Gear Store:
              Gearheads Outdoor Store is the local climbing, slacklining, and
              gear store located at 471 S Main St #1, Moab. Phone: (435)
              259-4327.
              {"\n"}- **Post Office**: The United States Postal Service (USPS)
              is located at 50 E 100 N, Moab. Their phone number is (800)
              275-8777.
              {"\n"}- **Library***: Grant County Library is located at 257 E
              Center St, Moab. Phone: (435) 259-1111.
              {"\n"}- **Hotels and Restaurants**: There are lots of hotels and
              restaurants in the Moab area. Walk around or visit the information
              center or google for more information on what’s available in town.
            </Markdown>

            <Text style={styles.secondaryHeading}>
              National Parks and Other Sites to See
            </Text>

            <Markdown styles={styles}>
              - Arches National Park
              {"\n"}- Canyonlands National Park
              {"\n"}- Fisher Towers Picnic Area
              {"\n"}- Castleton Tower
              {"\n"}- Dead Horse Point State Park
            </Markdown>
          </View>

          <View>
            <Text style={styles.primaryHeading}>History</Text>

            <Text style={styles.text}>
              GGBY stands for Gobble Gobble Bitches Yeah and first started over
              a decade ago back in 2007 during the week of Thanksgiving as an
              informal get-together of friends who wanted to highline.
            </Text>

            <Text style={styles.secondaryHeading}>Organizers</Text>

            <Text style={styles.text}>
              GGBY Highline Gathering has been organized over the years by many
              amazing people who contributed their resources, time, experience,
              equipment, and energy towards making this magical event possible.
            </Text>

            <Text style={styles.text}>
              As of the 10th anniversary in 2017, GGBY has been an officially
              permitted and insured gathering coordinated and organized by
              Slackline U.S. and its GGBY Organizing Committee. The committee
              consists of a volunteer team of coordinators who give hundreds of
              hours throughout the year to care to the logistics of GGBY. The
              committee recognizes the dozens of individuals, throughout the
              years and currently, who volunteer, assist, or sponsor. The
              Gathering is a community organized event where everyone has a part
              in organizing.
            </Text>

            <Text style={styles.secondaryHeading}>Slackline U.S.</Text>

            <Text style={styles.text}>
              Slackline U.S. is a 501(c)(3) non-profit that is the official
              organizer of GGBY Highline Gathering. The mission of Slackline
              U.S. is to assist in access management for the slackline
              community, encourage conservation, and foster safe practices in
              all forms of slacklining through education and community
              development. Slackline U.S. is supported by its members. In 2017,
              Slackline U.S. became the official organizer of GGBY after
              increased use in the area during Thanksgiving week became
              unsustainable and began having a hazardous impact on the local
              ecology. As a result of organizing the event, parking, camping,
              and waste management issues were better contained and conditions
              improved. The goal for future years is to continue to protect both
              access to the Fruit Bowl as well as the environment. You can
              support the mission and work of Slackline U.S. by becoming a
              member today!
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default InfoView;
