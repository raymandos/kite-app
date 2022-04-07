import PropTypes from 'prop-types'
import LabelUnderlinedSmall from '../labels'
import InputTextUnderlinedSmall from '../textinput'
import Label from '../labels'
import InputText from '../textinput'
import LabelUnderlined from '../labels'
import InputTextUnderlined from '../textinput'

const WrapperForm = ({
    children
}) => {
    return (
        <div className="w-80 shadow-lg overflow-hidden rounded-2xl">
            {children}
        </div>
    )
}

WrapperForm.propTypes = {
    children: PropTypes.any
}

const WrapperInput = ({
    children,
    id,
    title,
    type,
    onChange,
    value,
    placeholder,
    required
}) => {
    return (
        <div className="relative w-full text-gray-600 mt-2">
            <Label id={id} title={title} />
            {children ? (
                <InputText
                    id={id}
                    key={id}
                    title={title}
                    type={type}
                    hasChildren={true}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                />
            ) : (
                <InputText
                    id={id}
                    key={id}
                    title={title}
                    type={type}
                    hasChildren={false}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                />
            )}
            <span className="absolute top-2.5 left-3.5 w-5 h-5 text-gray-500">
                {children}
            </span>
        </div>
    )
}

WrapperInput.propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

const WrappedInputUnderlineSmall = ({
    id,
    title,
    type,
    onChange,
    value,
    placeholder,
    required
}) => {
    return (
        <div className="w-full text-gray-600 my-3">
            <LabelUnderlinedSmall id={id} title={title} />
            <InputTextUnderlinedSmall
                id={id}
                key={id}
                title={title}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

WrappedInputUnderlineSmall.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

const WrapperInputUnderline = ({
    id,
    title,
    type,
    onChange,
    value,
    placeholder,
    required
}) => {
    return (
        <div className="w-full text-gray-600 my-6">
            <LabelUnderlined id={id} title={title} />
            <InputTextUnderlined
                id={id}
                key={id}
                title={title}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}


WrapperInputUnderline.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

const WrapperNavbarResponsiveButtons = ({ children }) => {
    return (
        <div className="flex flex-col space-y-2 bg-gray-50 shadow-inner rounded-2xl p-4">
            {children}
        </div>
    )
}

WrapperNavbarResponsiveButtons.propTypes = {
    children: PropTypes.any
}

export default { WrappedInputUnderlineSmall, WrapperForm, WrapperInput, WrapperInputUnderline, WrapperNavbarResponsiveButtons }


