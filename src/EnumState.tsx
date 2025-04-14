import { Button, Flex } from "antd";
import { useEffect, useRef, useState } from "react";

export function EnumState() {
    const [isIdle, setIdle] = useState(true);
    const [isInProgress, setInProgress] = useState(false);
    const [isFinished, setFinished] = useState(false);
    const [result, setResult] = useState<number | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const start = () => {
        setIdle(false);
        setInProgress(true);
        setFinished(false);

        timeoutRef.current = setTimeout(() => {
            setInProgress(false);
            setFinished(true);
            setResult(Math.random() * 100);
        }, 1000);
    };

    return (
        <Flex gap="small" align="center">
            <Button
                type="primary"
                loading={isInProgress}
                disabled={!isIdle}
                onClick={() => start()}
            >
                Start
            </Button>
            {isFinished && <span>Result: {result?.toFixed(0)}</span>}
        </Flex>
    )
}