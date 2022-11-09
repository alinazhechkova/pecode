const Select = ({ children, onChange, label, placeholder }) => (
    <label className="filter-label">
        {label}
        <div className="filter-select" onChange={onChange}>
            <select>
                <option defaultValue value="">
                    {placeholder}
                </option>
                {children}
            </select>
        </div>
    </label>
)

export default Select
