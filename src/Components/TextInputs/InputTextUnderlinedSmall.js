import PropTypes from 'prop-types'

const InputTextUnderlinedSmall = ({
    id,
    title,
    type = 'text',
    onChange,
    value,
    placeholder,
    required = false
}) => {
    return (
        <input
            id={id}
            name={id}
            key={id}
            title={title}
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 rounded-none font-light text-xs placeholder-gray-300 hover:border-blue-500 focus:outline-none transition ease-in-out duration-300"
            required={required}
        />
    )
}

InputTextUnderlinedSmall.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

export default InputTextUnderlinedSmall