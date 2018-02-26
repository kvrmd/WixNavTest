import { Navigation } from "react-native-navigation"
import ABCD from "./screens/ABCD"

function registerScreens() {
  Navigation.registerComponent("app.A", () => ABCD)
  Navigation.registerComponent("app.B", () => ABCD)
  Navigation.registerComponent("app.C", () => ABCD)
  Navigation.registerComponent("app.D", () => ABCD)
}

registerScreens()

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: "app.A",
    title: "Screen app.A",
    navigatorStyle: {},
    navigatorButtons: {}
  }
})
