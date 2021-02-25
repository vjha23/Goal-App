import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Enter Your Goals'
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button
                    title='Add'
                    onPress={props.onAddGoal.bind(this, enteredGoal)}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
})

export default GoalInput
