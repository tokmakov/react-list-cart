import {useEffect} from 'react';

export default function ShowInfo(props) {
    useEffect(() => {
        const timeoutId = setTimeout(props.hideInfo, 2000);
        return () => clearTimeout(timeoutId);
    }, [props.text]);

    return (
        <div className="show-info">{props.text}</div>
    );
}