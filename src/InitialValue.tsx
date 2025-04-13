import { Input, Typography } from "antd";
import { useState } from "react";

const { Text } = Typography;

export function InitialValue() {
    const [value, setValue] = useState<string>();

    return (
        <>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div>
                Value type: <Text code>{typeof value}</Text>
            </div>
        </>
    );
}