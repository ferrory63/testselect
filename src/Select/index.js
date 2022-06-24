import React, { useState, useEffect, useRef } from 'react'
import Option from '../Option'
import './select.css'

function Select({
    content,
    prompt,
    value,
    setValue,
    color,
    width,
    multiselect,
}) {
    const [isopen, setIsOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const ref = useRef(null)

    useEffect(() => {
        let close = (event) => {
            if (!ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', close)
        return () => {
            document.removeEventListener('click', close)
        }
    }, [])

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onAddToValue = (content) => {
        if (multiselect) {
            if (value.find((item) => Number(content.id) === Number(item.id))) {
                setValue((prev) =>
                    prev.filter(
                        (item) => Number(content.id) !== Number(item.id)
                    )
                )
            } else {
                setValue((prev) => [...prev, content])
            }
        } else if (!multiselect) {
            setValue(content)
            setIsOpen(!isopen)
        }
    }

    return (
        <div style={{ width: width }}>
            <div ref={ref} className={`select ${color}`}>
                <div
                    className={`control ${color}`}
                    //  onClick={() => setIsOpen(true)}
                >
                    <div className="selected-value">
                        {prompt}
                    </div>
                    <div
                        onClick={() => setIsOpen(!isopen)}
                        className={`arrow ${isopen ? 'open' : null}`}
                    />
                </div>
                <div className={`options ${isopen ? 'open' : null} ${color}`}>
                    <div className={`search ${color}`}>
                        {isopen ? (
                            <input
                                className={`search-block ${color}`}
                                onChange={onChangeSearchInput}
                                value={searchValue}
                                placeholder="Search..."
                                type="text"
                            />
                        ) : (
                            prompt
                        )}
                    </div>
                    {content
                        .filter((obj) =>
                            obj.text
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((obj) => (
                            <Option
                                value={value}
                                setValue={setValue}
                                content={obj}
                                key={obj.id}
                                onAddToValue={onAddToValue}
                                color={color}
                                multiselect={multiselect}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Select
