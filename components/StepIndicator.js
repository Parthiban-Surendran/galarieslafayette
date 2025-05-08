// components/StepIndicator.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StepIndicator = ({ currentStep, stepCount, labels, onStepClick }) => {
  return (
    <View style={styles.stepContainer}>
      {Array.from({ length: stepCount }).map((_, index) => (
        <View key={index} style={styles.stepWrapper}>
          {/* Step Circle */}
          <TouchableOpacity
            style={[
              styles.stepCircle,
              currentStep === index + 1 && styles.activeStep,
            ]}
            onPress={() => onStepClick(index + 1)} // Navigates to selected step
          >
            <Text style={styles.stepText}>{index + 1}</Text>
          </TouchableOpacity>

          {/* Connecting Line */}
          {index < stepCount - 1 && (
            <View
              style={[
                styles.connectingLine,
                currentStep > index + 1 && styles.activeLine, // Highlight line if past step
              ]}
            />
          )}

          {/* Step Label */}
          <Text
            style={[
              styles.labelText,
              currentStep === index + 1 && styles.activeLabelText,
            ]}
          >
            {labels[index]}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  activeStep: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  stepText: {
    color: '#000',
    fontWeight: 'bold',
  },
  connectingLine: {
    width: 50,
    height: 2,
    backgroundColor: '#000',
  },
  activeLine: {
    backgroundColor: '#4CAF50', // Highlighted line color
  },
  labelText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  activeLabelText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default StepIndicator;
