import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsMode] = useState(false)


  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals,
    { id: Math.random().toString(), value: goalTitle }]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen} >
      <Button title='Add New Goal' onPress={() => setIsMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    borderColor: 'red',
    borderWidth: 1,

  },


});
