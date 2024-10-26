import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { WrapperContainer2 } from '../WrapperContainers';
import { InputCard } from '../InputsCards';
import { ScrollableWrapper } from '../ScrollableWrapper';

import "./styles.css";

const DropCard = ({title, array=[], onClick, value, searchBox=true}) => {

    const [searchValue, setSearchValue] = React.useState("");

    const filteredArray = searchValue.trim() === '' ? array : array.filter(item => item.toLocaleLowerCase().includes(searchValue));

    return (
        <WrapperContainer2 padding={0} flexDirection='column' justifyContent='start' alignItems='start' gap={5}>
            <p style={{color: "#FFF", fontWeight: "bold"}}>{title}</p>
            <Dropdown className="dropdown-card-container">
                <Dropdown.Toggle id="dropdown-card-basic" className='dropdown-card-button'>
                    {(value == 1 && "Si" ||  
                    (value == "" || !value) && "Todo" ||
                    value == 0 && "No" || 
                    value)}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-card-grid-container">
                    {searchBox &&
                        <InputCard
                            id={"search-icon-input"}
                            label={"Buscar"}
                            placeholder='Buscar'
                            onChange={(event) => {setSearchValue(event.toLocaleLowerCase())}}
                            defaultValue={searchValue}
                            className='dropdown-card-search-input'
                            required={false}
                            haveLabel={false}
                        />
                    }
                    
                    <ScrollableWrapper maxHeight={400}>
                        <Dropdown.Item style={{padding: 0}} onClick={() => onClick("")}>
                            <WrapperContainer2  padding={10}>
                                <p>Todo</p>
                            </WrapperContainer2>
                        </Dropdown.Item>
                        {filteredArray?.map((item, index) => (
                            <Dropdown.Item key={index} style={{padding: 0}} onClick={() => {
                                    onClick(item)
                                    setSearchValue("");
                                }}>
                                <WrapperContainer2 key={index} padding={10}>
                                    <p>
                                        {item == 1 && "Si" || 
                                        item == 0 && "No" || 
                                        item}
                                    </p>
                                </WrapperContainer2>
                            </Dropdown.Item>
                        ))}
                    </ScrollableWrapper>
                </Dropdown.Menu>
            </Dropdown>  
        </WrapperContainer2>

    )
}

export { DropCard };