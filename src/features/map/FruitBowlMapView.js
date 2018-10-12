import React from "react";
import { reduce } from "ramda";

class FruitBowlMapView extends React.Component {
    // TODO: Figure out if this is necessary.
    onEventPress = event => {
        const { navigation } = this.props;
        navigation.navigate("EventDetails", { id: event.id });
    };

    render() {
        const { events } = this.props;
        return <ScheduleView events={events} onEventPress={this.onEventPress} />;
    }
}

const mapStateToProps = state => ({
    events: selectEvents(state)
});

export default connect(mapStateToProps)(MapContainer);
  


    const MapScreen = () => (
        <MapView
            style={{ flex: 1 }}
            region={{
            latitude: 47.642234,
            longitude: -122.305725,
            latitudeDelta: 0.004,
            longitudeDelta: 0.005,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            >
            <Overlay
                image={fruitbowl}
                bounds={this.state.overlay_bounds}
            />
        </MapView>
    );
}


export default MapScreen;