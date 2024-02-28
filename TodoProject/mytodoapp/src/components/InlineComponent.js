const header = {
    color:"red",
    fontSize: "140px",
}

export default function InlineComponent () {
    return (<div>
        <h1 style={header}>This is an inline component</h1>
    </div>
    );
}