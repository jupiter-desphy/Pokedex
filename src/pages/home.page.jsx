import { useState } from "react";

export function HomePage(props) {
    let [list, setList] = useState(["ready", "set", "GO!"]);
    let [text, setText] = useState([""]);

    function onSubmit(event) {
        event.preventDefault();

        let newList = [...list, text];
        setList(newList);
        setText("");
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {list.map((item, idx) => {
                        return <li key={item + idx}>{item}</li>;
                    })}
                </ul>
            </header>
        </div>
    );
}
