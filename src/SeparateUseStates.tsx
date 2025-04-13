import { Button, Flex, Progress, Spin } from "antd";
import { useState } from "react";

const DEFAULTS = {
    health: 100,
    mana: 100,
    stamina: 100,
};

export function SeparateUseStates() {
    const [health, setHealth] = useState(100);
    const [mana, setMana] = useState(50);
    const [stamina, setStamina] = useState(75);
    const [isLoading, setLoading] = useState(false);

    const restore = () => {
        setHealth(DEFAULTS.health);
        setMana(DEFAULTS.mana);
        setStamina(DEFAULTS.stamina);
    };

    const castSpell = () => {
        setMana((value) => value - 10);
        setStamina((value) => value - 5);
    };

    const toggleLoading = () => {
        setLoading((value) => !value);
    };

    return (
        <Flex gap="middle" vertical>
            <Spin spinning={isLoading}>
                <Flex gap="small">
                    <ProgressCircle color="red" value={health} />
                    <ProgressCircle color="blue" value={mana} />
                    <ProgressCircle color="orange" value={stamina} />
                </Flex>
            </Spin>
            <Flex gap="small">
                <Button onClick={() => restore()}>Restore</Button>
                <Button onClick={() => castSpell()}>Cast Spell</Button>
                <Button onClick={() => toggleLoading()}>Toggle Loading</Button>
            </Flex>
        </Flex>
    );
}

function ProgressCircle({ color, value }: {
    color: string; value: number;
}) {
    return (
        <Progress
            type="circle"
            strokeColor={color}
            percent={value}
            format={(percent) => (
                <span style={{ color }}>{percent}</span>
            )}
        />
    );
}
