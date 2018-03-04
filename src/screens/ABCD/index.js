import React, { Component } from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Text } from "react-native-elements"
import NavButtons from "../../components/NavButtons"

export default class A extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  onNavigatorEvent(event) {
    switch (event.id) {
      case "willAppear":
        console.log(event)
        break
      case "didAppear":
        console.log(event)
        break
      case "willDisappear":
        break
      case "didDisappear":
        break
      case "willCommitPreview":
        break
    }
  }

  render() {
    const { navigator } = this.props
    const screens = ["app.A", "app.B", "app.C", "app.D", "app.E"]
    return (
      <View>
        <Text h1 style={{ alignSelf: "center" }}>
          Wix Navigation Test
        </Text>
        <NavButtons navigator={navigator} screens={screens} />
      </View>
    )
  }
}
