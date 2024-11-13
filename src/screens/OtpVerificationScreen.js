import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

const OtpVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleOtpChange = (text, index) => {
    const otpArray = [...otp];
    otpArray[index] = text;
    setOtp(otpArray);
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setTimer(30);
      // Logic to resend OTP
    }
  };

  return (
    <View className="flex-1 bg-primary justify-center items-center">
      {/* Main White Container */}
      <View className="bg-white w-[90%] rounded-3xl p-6 shadow-lg">
        <Text className="text-center text-xl font-semibold text-primary mb-4">Phone Verification</Text>
        
        <Text className="text-center text-gray-700 mb-4">
          We have sent a verification code to
        </Text>
        <Text className="text-center text-green-600 font-medium mb-6">+91 9876543210</Text>

        {/* OTP Input Boxes */}
        <View className="flex-row justify-center space-x-2 mb-10">
          {otp?.map((value, index) => (
            <TextInput
              key={index}
              className="border-2 border-gray-200 rounded-lg w-12 h-12 text-center text-lg text-black"
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleOtpChange(text, index)}
              value={value}
            />
          ))}
        </View>

        {/* Resend Timer */}
        <Text className="text-center text-gray-600 mb-6">
          Didn’t get Verification code?
        </Text>
        <TouchableOpacity onPress={handleResendOtp} disabled={timer > 0}>
          <Text className={`text-center ${timer > 0 ? 'text-gray-400' : 'text-green-600'} font-medium mb-4`}>
            {timer > 0 ? `Resend SMS in ${timer}s` : 'Resend SMS'}
          </Text>
        </TouchableOpacity>

        {/* Alternative Login Option */}
        <TouchableOpacity onPress={() => {}}>
          <Text className="text-center text-blue-600 mt-3 mb-10">Try Other login Methods</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <CustomButton label="Submit" onPress={() => {navigation.navigate('OtpVerification')}} />
      </View>
    </View>
  );
};

export default OtpVerificationScreen;
