const Select = ({ options, onChange, label, placeholder }) => (
    <label className="filter-label">
        {label}
        <div className="filter-select" onChange={onChange}>
            <select>
                <option defaultValue value="">
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    </label>
)

export default Select
