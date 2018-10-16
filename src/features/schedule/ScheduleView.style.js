import { StyleSheet } from "react-native";
import * as v from "theme/variables";

export default StyleSheet.create({
  screen: {
    backgroundColor: v.BACKGROUND_COLOR,
    flex: 1
  },

  sectionHeaderContainer: {
    paddingHorizontal: v.BASE_VALUE,
    paddingVertical: v.BASE_VALUE * 2
  },

  sectionTitleText: {
    color: v.PRIMARY_TEXT_COLOR,
    fontSize: v.NORMAL_FONT_SIZE,
    fontWeight: v.BOLD_FONT_WEIGHT
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
  },

  emptyMessageText: {
    marginVertical: v.BASE_VALUE * 2,
    marginHorizontal: v.BASE_VALUE,
    alignSelf: "center"
  }
});
