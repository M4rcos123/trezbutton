import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importando os estilos

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); // Para armazenar o item selecionado

  const addTask = () => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  };

  const removeFirstTask = () => {
    setTasks((prevTasks) => prevTasks.slice(1));
  };

  const removeLastTask = () => {
    setTasks((prevTasks) => prevTasks.slice(0, -1));
  };

  const removeTaskAtIndex = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const selectTask = (index) => {
    setSelectedIndex(index);
  };

  const removeSelectedTask = () => {
    if (selectedIndex !== null) {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== selectedIndex));
      setSelectedIndex(null); // Limpar a seleção
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={setTask}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Adicionar" onPress={addTask} />
        <Button title="Remover primeiro" onPress={removeFirstTask} />
        <Button title="Remover último" onPress={removeLastTask} />
        <Button title="Excluir selecionado" onPress={removeSelectedTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onLongPress={() => selectTask(index)} // Marca o item como selecionado
            style={[
              styles.taskItem,
              selectedIndex === index ? styles.selectedTask : null, // Aplica estilo ao item selecionado
            ]}
          >
            <Text style={styles.taskText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

