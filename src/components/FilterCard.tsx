import styled, { StyledComponent } from '@emotion/styled';
import { Button, ButtonProps, Card, CardProps, Col, Row, Space } from 'antd';
import { MouseEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { removeFilter, clearFilters } from '../reducers/filterSlice';


const Box: StyledComponent<CardProps> = styled(Card) <CardProps>`
  padding: 0 0 0 0;
  font-weight: 700;
  background: #fff;
  margin: -40px 10% 30px 10%;
  border-radius: 8px;
  box-shadow: hsl(180, 29%, 80%) 0px 13px 27px -5px, hsl(180, 8%, 52%) 0px 8px 16px -8px;
  @media (max-width:700px){
    margin: -40px 20px 30px 20px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
  } 
`;

const FilterButton: StyledComponent<ButtonProps> = styled(Button)`
  display: flex;
  border-radius: 6px;
  background: hsl(180, 52%, 96%);
  color :hsl(180, 29%, 50%);
  padding: 0px;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  #button__text{
    padding: 2.5px 8px ;
    display: flex;
    align-self: center;
  }
  #button__icon {
    padding: 0 7.5px;
    color: #fff;
    font-size: 1.5em;
    background: hsl(180, 29%, 50%);
    pointer-events: all;
    cursor: pointer;
  }
  &:active {
    #button__icon {
    background-color: hsl(180, 14%, 20%);
    color: hsl(180, 52%, 96%);}
  }
`;

const FilterClearButton: StyledComponent<ButtonProps> = styled(Button)`
  margin-right: 30px;
  background: #fff;
  color: rgb(91,164,164);
  border: 0px;
  align-self:center;
  &:hover {
    background: #fff;
  }
  #text:active {
    text-decoration: underline;
    color: hsl(180, 14%, 20%);
  };
`;


export const FilterCard = ():JSX.Element => {
  const filters:string[] = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const handleRemove = (e:MouseEvent<HTMLButtonElement>):void => {
    dispatch(removeFilter(e.currentTarget.value));
  }

  const handleClear = ():void => {
    dispatch(clearFilters());
  }

  return (
    <>
      {filters.length > 0 &&
        <Box>
          <Row wrap={false} align="middle">
            <Col flex={"auto"}>
              <Space size={[10, 10]} wrap>
                {filters.map((filter, index) => (
                  <FilterButton type='text' key={index} value={filter} onClick={handleRemove}>
                    <span id='button__text'>
                      {filter}
                    </span>
                    <span id='button__icon'>
                      &times;
                    </span>
                  </FilterButton>
                ))}
              </Space>
            </Col>
            <Col flex={"80px"}>
              <FilterClearButton type='text' onClick={handleClear}>
                <span id="text">Clear</span>
              </FilterClearButton>
            </Col>
          </Row>
        </Box>
      }
    </>
  )
}