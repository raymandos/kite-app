import PropTypes from 'prop-types'

const BtnBlockDanger = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="w-full px-4 py-2 bg-red-600 border-2 border-red-600 rounded-xl text-white hover:bg-transparent hover:border-red-700 hover:text-red-700 focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center justify-center space-x-1">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnBlockDanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnOlineDanger = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="w-full px-4 py-2 bg-transparent border-2 border-red-600 rounded-xl text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center justify-center space-x-1">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnOlineDanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnBlockPrimary = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="w-full px-4 py-2 bg-blue-500 border-2 border-blue-500 rounded-xl text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center justify-center space-x-1">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnBlockPrimary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnBlockWarning = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="w-full px-4 py-2 bg-yellow-500 border-2 border-yellow-500 rounded-xl text-white hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center justify-center space-x-1">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnBlockWarning.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnOlineDanger = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="px-2 py-1.5 bg-transparent border-2 border-red-600 rounded-full text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center space-x-0.5">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnOlineDanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnOlineSecondary = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="px-2 py-1.5 bg-transparent border-2 border-gray-600 rounded-full text-gray-600 hover:bg-gray-600 hover:border-gray-600 hover:text-white focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center space-x-0.5">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnOlineSecondary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnPrimary = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="px-2 py-1.5 bg-blue-500 border-2 border-blue-500 rounded-full text-white hover:bg-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center space-x-0.5">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnPrimary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnSimpleDanger = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            type={type}
            className="px-3 py-2 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-800 focus:outline-none transition ease-in-out duration-300"
            onClick={onClick}
        >
            <div className="flex items-center space-x-2">
                {children}
                <span className="uppercase font-medium tracking-wider text-xs whitespace-nowrap">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnSimpleDanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnSimpleLargeDanger = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            type={type}
            className="px-4 py-2 bg-white shadow-lg rounded-xl text-red-600 hover:bg-gray-100 hover:text-red-800 focus:outline-none transition ease-in-out duration-300"
            onClick={onClick}
        >
            <div className="flex items-center space-x-2">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnSimpleLargeDanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const BtnSimpleLargeSecondary = ({
    children,
    title,
    type = 'button',
    onClick
}) => {
    return (
        <button
            className="px-4 py-2 bg-white shadow-lg rounded-xl text-gray-800 hover:bg-gray-100 hover:text-black focus:outline-none transition ease-in-out duration-300"
            type={type}
            onClick={onClick}
        >
            <div className="flex items-center space-x-2">
                {children}
                <span className="p-0.5 uppercase text-xs font-semibold tracking-widest">
                    {title}
                </span>
            </div>
        </button>
    )
}

BtnSimpleLargeSecondary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default {
    BtnBlockDanger
    , BtnOlineDanger, BtnBlockPrimary, BtnBlockWarning, BtnOlineDanger, BtnOlineSecondary, ...
    BtnPrimary, BtnSimpleDanger, BtnSimpleLargeDanger, BtnSimpleLargeSecondary
}

