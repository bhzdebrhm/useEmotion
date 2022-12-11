const Button = (props) => {
    const btnStyle = {
        color: "#fff",
        backgroundColor: "#0069d9",
        fontSize: "14px"
    }
    return (
        <button style={btnStyle}>{props}</button>
    )
}