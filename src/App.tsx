import { Button, Tabs } from "antd";
import { useState } from "react";
import { AsyncStateUpdate } from "./AsyncStateUpdate";
import { DerivedState } from "./DerivedState";
import { DirectMutation } from "./DirectMutation";
import { EnumState } from "./EnumState";
import { InitialValue } from "./InitialValue";
import { SeparateUseStates } from "./SeparateUseStates";

export default function App() {
    const [_dummyState, setDummyState] = useState({});

    const rerender = () => {
        setDummyState({});
    };

    return (
        <Tabs
            defaultActiveKey="enum-state"
            tabBarExtraContent={
                <Button onClick={rerender}>Rerender</Button>
            }
            items={[
                {
                    key: 'initial-value',
                    label: 'Initial Value',
                    children: <InitialValue />
                },
                {
                    key: 'async-update',
                    label: 'Async Update',
                    children: <AsyncStateUpdate />,
                },
                {
                    key: 'direct-mutation',
                    label: 'Direct Mutation',
                    children: <DirectMutation />,
                },
                {
                    key: 'separate-use-state',
                    label: 'Separate useState',
                    children: <SeparateUseStates />,
                },
                {
                    key: 'enum-state',
                    label: 'Enum State',
                    children: <EnumState />,
                },
                {
                    key: 'derived-state',
                    label: 'Derived State',
                    children: <DerivedState />,
                },
            ]}
        />
    );
}
