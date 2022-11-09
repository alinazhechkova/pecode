const Input = ({ label, value, onChange, placeholder }) => {
    return (
        <label className="filter-label">
            {label}
            <input
                type="text"
                value={value}
                className="filter-input"
                placeholder={placeholder}
                id="name"
                onInput={(e) => {
                    onChange(e.target.value)
                }}
            />
        </label>
    )
}

export default Input
