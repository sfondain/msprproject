import React from 'react';
import {View, Button} from 'react-native';

export default function App() {
    const users = [
        { id: "1", name: 'Alice' },
        { id: "2", name: 'Bob' },
        { id: "3", name: 'Claire' },
        { id: "4", name: 'David' },
    ]
    return (
        <View>
            {users.map((user) => (
                <Button title={user.name}
                        onPress={() => alert(`User id =  ${user.id},\nUser name =  ${user.name}`)}
                        color="red"
                />
            ))}
        </View>
    );
}