import { StyleSheet } from "react-native";
import * as v from "theme/variables";

export default StyleSheet.create({
  screen: {
    backgroundColor: v.DARK_GREY
  },

  sectionHeaderContainer: {
    backgroundColor: v.DARK_GREY,
    paddingHorizontal: v.BASE_VALUE,
    paddingVertical: v.BASE_VALUE * 2
  },

  sectionTitleText: {},

  eventItemContainer: {
    backgroundColor: v.BACKGROUND_COLOR,
    flexDirection: "row",
    marginHorizontal: v.BASE_VALUE,
    marginVertical: v.BASE_VALUE / 2,
    borderRadius: v.BASE_VALUE,
    padding: v.BASE_VALUE
  },

  leftEventItemSection: {
    flex: 0,
    marginRight: v.BASE_VALUE,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },

  centerEventItemSection: {
    flex: 1,
    marginHorizontal: v.BASE_VALUE
  },

  rightEventItemSection: {
    flex: 0,
    marginLeft: v.BASE_VALUE
  },

  eventTitleText: {
    color: v.PRIMARY_TEXT_COLOR,
    fontSize: v.NORMAL_FONT_SIZE,
    fontWeight: "700",
    marginVertical: v.BASE_VALUE / 2
  },

  normalText: {
    color: v.PRIMARY_TEXT_COLOR,
    fontSize: v.NORMAL_FONT_SIZE,
    marginVertical: v.BASE_VALUE / 2
  },

  secondaryText: {
    color: v.SECONDARY_TEXT_COLOR,
    fontSize: v.NORMAL_FONT_SIZE,
    marginVertical: v.BASE_VALUE / 2
  }
});
