import React from 'react';
import { View, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const StatusBarColor = ({ backgroundColor, ...props }) => (
    <View style={{ height: STATUSBAR_HEIGHT, backgroundColor }}>
        <StatusBar backgroundColor={backgroundColor} translucent {...props} />
    </View>
);
export default StatusBarColor;
