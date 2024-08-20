import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const index = () => {
  const [text, onChangeText] = useState("cat");
  const [number, onChangeNumber] = useState("1");
  const [isChecked, setChecked] = useState(false);
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView>
      <Text>form</Text>
      <TextInput
        className="border-solid rounded-xl border-2 p-2 m-2"
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        className="border-solid rounded-xl border-2 p-2 m-2"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <View className="flex gap-2">
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text>{isChecked ? "Checked" : "Not Checked"}</Text>
      </View>

      <Text>Country:</Text>
      <Picker
        selectedValue={country}
        onValueChange={(itemValue) => setCountry(itemValue)}
      >
        <Picker.Item label="Select a country" value="" />
        <Picker.Item label="USA" value="usa" />
        <Picker.Item label="Canada" value="canada" />
        <Picker.Item label="UK" value="uk" />
        <Picker.Item label="Australia" value="australia" />
      </Picker>

      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <Text>Result : </Text>
      <Text>{text}</Text>
      <Text>{number}</Text>
      <Text>{country}</Text>
      <Text>{date.toLocaleString()}</Text>
      <Text>{isChecked ? "Checked" : "Not Checked"}</Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
