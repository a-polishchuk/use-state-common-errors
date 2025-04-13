import { Button, Flex, Input, List } from "antd";
import { useState } from "react";

export function DirectMutation() {
    const [todos, setTodos] = useState(['Buy milk', 'Walk dog']);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        todos.push(newTodo);
    };

    return (
        <>
            <Flex gap="small" align="center">
                <Input
                    placeholder="New TODO"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button
                    disabled={!newTodo.trim()}
                    onClick={addTodo}
                >
                    Add
                </Button>
            </Flex>
            <h3>TODO list</h3>
            <List
                bordered
                dataSource={todos}
                renderItem={(item) => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </>
    );
}