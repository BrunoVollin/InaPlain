import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { DataTable } from 'react-native-paper';

const data = [
  // {
  //   id: 1,
  //   name: 'Banco de dados 2',
  //   code: 'S202'
  // },
  // {
  //   id: 2,
  //   name: 'Algoritimos 1',
  //   code: 'C202'
  // },
  // {
  //   id: 3,
  //   name: 'Algoritimos 2',
  //   code: 'C203'
  // }

]


export default function App() {
  const [text, setText] = React.useState('');
  const [list, setList] = React.useState(data);

  function handleSubmit() {
    if (text.length > 0) {
      const newData = text.split(" ");
      setList([...list, { id: list.length + 1, name: newData[0], code: newData[1] }]);
      setText('');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.font}>InaPlain</Text>
      <TextInput
        value={text}
        placeholder="Type here to translate!"
        onChange={(event) => setText(event.nativeEvent.text)}
      />
      <Button title="Insert" onPress={handleSubmit} />

      <View style={styles.list}>
        {list.map(item => (
          <Text key={item.id}> {item.code}: {item.name}</Text>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
    fontSize: 30,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  font: {
    fontSize: 30,
    color: 'white',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: '80%',
    color: 'white',
    backgroundColor: 'black',
  }
});
