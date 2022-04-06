import PropTypes from 'prop-types'

const btnblockdanger = ({
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

btnblockdanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnolinedanger = ({
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

btnolinedanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnblockprimary = ({
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

btnblockprimary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnblockwarning = ({
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

btnblockwarning.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnolinedanger = ({
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

btnolinedanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnolinesecondary = ({
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

btnolinesecondary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnprimary = ({
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

btnprimary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnsimpledanger = ({
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

btnsimpledanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnsimplelargedanger = ({
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

btnsimplelargedanger.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

const btnsimplelargesecondary = ({
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

btnsimplelargesecondary.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export default {
    btnblockdanger, btnolinedanger, btnblockprimary, btnblockwarning, btnolinedanger, btnolinesecondary, ...
        btnprimary, btnsimpledanger, btnsimplelargedanger, btnsimplelargesecondary
}

