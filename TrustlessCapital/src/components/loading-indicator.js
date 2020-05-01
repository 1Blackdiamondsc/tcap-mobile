import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

const LoadingIndicator = ({  visible, message }) => {
  return (
    <Dialog visible={visible}>
      <DialogContent>
        <View style={styles.dialogContent}>
          <ActivityIndicator size="small" color={Colors.tintColor} />
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </DialogContent>
    </Dialog>
  );
};

const styles = {
  dialogContent: {
    justifyContent: 'center',
    marginBottom: 'auto',
    marginTop: 20,
    marginStart: 0,
    minWidth: 30,
    maxWidth: 250,
    textAlign: 'center',
  },
  message: {
    marginTop: 15,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'montserrat',
    color: Colors.title
  },
};

export default LoadingIndicator;