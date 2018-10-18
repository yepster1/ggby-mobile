import { StyleSheet } from "react-native";
import * as v from "theme/variables";

export default StyleSheet.create({
  page: {
    backgroundColor: v.BACKGROUND_COLOR,
  },
  heading: {
    fontSize: 36,
    color: v.PRIMARY_TEXT_COLOR,
    textAlign: 'center',
    borderBottomColor: v.SECONDARY_TEXT_COLOR,
    borderBottomWidth: 1,
  },
  content: {
    fontSize: 14,
    fontWeight: "400",
    color: v.PRIMARY_TEXT_COLOR,
    marginHorizontal: v.BASE_VALUE*2,
    marginVertical: v.BASE_VALUE,
  },
  boldContent: {
    fontSize: 14,
    fontWeight: "bold",
    color: v.PRIMARY_TEXT_COLOR,
    marginHorizontal: v.BASE_VALUE*2,
    marginVertical: v.BASE_VALUE,
  }
});
