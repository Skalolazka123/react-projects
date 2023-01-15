function Reset({ onClick }) {
    return (
        <button className="Reset" onClick={() => onClick(0)}>
            Reset!
        </button>
    )
}

export default Reset
