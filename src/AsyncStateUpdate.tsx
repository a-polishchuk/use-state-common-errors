import { Button, Flex, Switch, Typography } from "antd";
import { useState } from "react";

const { Text } = Typography;

export function AsyncStateUpdate() {
    const [count, setCount] = useState(0);
    const [isDoubled, setDoubled] = useState(false);

    const increment = () => {
        setCount(count + 1);
        if (isDoubled) {
            setCount(count + 1);
        }
    };

    return (
        <Flex gap="small" align="center">
            <div>
                Count: <Text code>{count}</Text>
            </div>
            <Button type="primary" onClick={increment}>
                Increment {isDoubled ? 'x2' : ''}
            </Button>
            <Switch
                checked={isDoubled}
                onChange={(checked) => setDoubled(checked)}
                checkedChildren="x2"
                unCheckedChildren="x1"
            />
        </Flex>
    )
}