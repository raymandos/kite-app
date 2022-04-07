import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BtnSimpleLargeSecondary from './Buttons/BtnSimpleLargeSecondary'
import BtnSimpleLargeDanger from './Buttons/BtnSimpleLargeDanger'
import ModFilter from './modfilter'

const MenuFilter = ({
    spots,
    setSpots,
    unfilteredSpots,
    filterCountry,
    setFilterCountry,
    filterProbability,
    setFilterProbability,
    setFilterSearch
}) => {
    const [showFilterMenu, setShowFilterMenu] = useState(true)

    return (
        <div className="z-10">
            {showFilterMenu ? (
                <div className="absolute top-20 right-4 z-10 flex flex-col items-end space-x-2 space-y-2">
                    <BtnSimpleLargeSecondary title="Set filters" onClick={() => {
                        setShowFilterMenu(!showFilterMenu)
                    }}>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                        </svg>
                    </BtnSimpleLargeSecondary>
                    {

                    }
                    {spots.length !== unfilteredSpots.length ? (
                        <BtnSimpleLargeDanger title="Remove filters" onClick={() => {
                            setFilterCountry('')
                            setFilterProbability('')
                            setFilterSearch('')
                            setSpots(unfilteredSpots)
                        }}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3z" />
                            </svg>
                        </BtnSimpleLargeDanger>
                    ) : (
                        ''
                    )}
                </div>
            ) : (

                <ModFilter
                    filterCountry={filterCountry}
                    setFilterCountry={setFilterCountry}
                    filterProbability={filterProbability}
                    setFilterProbability={setFilterProbability}
                    onClick={() => {
                        setSpots(spots.filter((spot) => spot.country.toLowerCase().includes(filterCountry.toLowerCase()) && spot.probability.toString().includes(filterProbability.toString())))
                        setShowFilterMenu(!showFilterMenu)
                    }}
                />
            )}
        </div>
    )
}

MenuFilter.propTypes = {
    spots: PropTypes.array,
    setSpots: PropTypes.func,
    unfilteredSpots: PropTypes.array,
    filterCountry: PropTypes.string,
    setFilterCountry: PropTypes.func,
    filterProbability: PropTypes.string,
    setFilterProbability: PropTypes.func,
    setFilterSearch: PropTypes.func
}

export default MenuFilter