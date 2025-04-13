import { Badge, Input } from "antd";
import { useEffect, useState } from "react";

export function DerivedState() {
    const [text, setText] = useState('');
    const [wordsCount, setWordsCount] = useState(0);

    useEffect(() => {
        if (!text.trim()) {
            setWordsCount(0);
        } else {
            setWordsCount(text.trim().split(/\s+/).length);
        }
    }, [text]);

    return (
        <Badge count={wordsCount}>
            <Input
                placeholder="Enter some text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </Badge>
    );
}