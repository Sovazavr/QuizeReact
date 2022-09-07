import React, { PropTypes, useState } from 'react'
import { Link } from 'react-router-dom'
import "./LeftNavBar.scss"
import { Shevron } from './Shevron'

export const LeftNavBar = ({ }) => {
    const [fade, setFade] = useState(false)

    return (
        <div className={fade ? 'left_nav_bar' : 'close_nav_bar'}>
            {fade
                ? (<div className='navigator'>
                    <Link to="/">Главная</Link>
                    <Link to="/createquize">Создать квиз</Link>
                </div>)
                : <></>
            }

            <div onClick={() => setFade(!fade)} className={fade ? 'open' : 'close'}>
                <Shevron id={'shevron'} />
            </div>
        </div>
    )
}



