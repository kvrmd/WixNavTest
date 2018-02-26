import React, { Component } from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Button } from "react-native-elements"

export default class NavButtons extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    screens: PropTypes.array
  }

  render() {
    const { navigator, screens } = this.props
    return (
      <View>
        {screens.map(screen => {
          return (
            <View key={screen} style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
              <Button
                title={"Push " + screen}
                onPress={() => {
                  navigator.push({
                    screen,
                    title: "Screen " + screen
                  })
                }}
              />
              <Button
                title={"Modal " + screen}
                onPress={() => {
                  navigator.showModal({
                    screen,
                    title: "Modal " + screen,
                    navigatorStyle: { navBarBackgroundColor: "aquamarine" }
                  })
                }}
              />
              <Button
                title={"Reset " + screen}
                onPress={() => {
                  navigator.resetTo({
                    screen,
                    title: "Screen " + screen
                  })
                }}
              />
            </View>
          )
        })}
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
          <Button
            title="Pop"
            onPress={() => {
              navigator.pop()
            }}
          />
          <Button
            title="Reset"
            onPress={() => {
              navigator.popToRoot()
            }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
          <Button
            title="Dismiss Modal"
            onPress={() => {
              navigator.dismissModal()
            }}
          />
          <Button
            title="Dismiss All Modals"
            onPress={() => {
              navigator.dismissAllModals()
            }}
          />
        </View>
      </View>
    )
  }
}
