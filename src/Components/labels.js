import PropTypes from 'prop-types'

const Label = ({ id, title }) => {
    return (
        <label
            htmlFor={id}
            className="absolute -mt-2 left-2 block select-none px-1 font-medium tracking-wider text-xs bg-white rounded"
        >
            {title}
        </label>
    )
}

Label.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
}

const LabelUnderlined = ({ id, title }) => {
    return (
        <label
            htmlFor={id}
            className="block -mb-1 select-none font-medium tracking-wider text-sm text-gray-700"
        >
            {title}
        </label>
    )
}

LabelUnderlined.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
}

const LabelUnderlinedSmall = ({ id, title }) => {
    return (
        <label
            htmlFor={id}
            className="block -mb-1 select-none font-medium tracking-wider text-xs text-gray-700"
        >
            {title}
        </label>
    )
}

LabelUnderlinedSmall.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
}

export default { Label, LabelUnderlined, LabelUnderlinedSmall }