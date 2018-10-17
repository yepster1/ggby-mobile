import { StyleSheet } from "react-native";
import * as v from "../../theme/variables";

export default StyleSheet.create({
  eventItemContainer: {
    backgroundColor: v.BACKGROUND_COLOR,
    flexDirection: "row",
    borderRadius: v.BASE_VALUE,
    paddingVertical: v.BASE_VALUE / 2,
    paddingHorizontal: v.BASE_VALUE
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
    justifyContent: "center",
    alignItems: "center"
  },

  reminderIcon: {
    color: v.PRIMARY_TEXT_COLOR,
    fontSize: v.NORMAL_FONT_SIZE * 2,
    padding: v.BASE_VALUE
  },

  activeReminderIcon: {
    color: v.RED
  },

  eventTitleText: {
    color: v.PRIMARY_TEXT_COLOR,
    fontSize: v.NORMAL_FONT_SIZE,
    fontWeight: v.BOLD_FONT_WEIGHT,
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
