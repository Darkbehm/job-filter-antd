import { MouseEvent } from 'react';
import { Card, Button, CardProps, ButtonProps, List, Row, Col } from 'antd';
import styled, { StyledComponent } from '@emotion/styled';

import { useAppDispatch } from '../hooks/';
import { addFilter } from '../reducers/filterSlice';

type BoxProps = {
  featured: boolean;
} & CardProps;


const Box: StyledComponent<BoxProps> = styled(Card) <BoxProps>`
  background: #fff;
  margin: 30px 10% 30px 10%;
  border-radius: 8px;
  box-shadow: hsl(180, 29%, 80%) 0px 13px 27px -5px, hsl(180, 8%, 52%) 0px 8px 16px -8px;
  border-left:${props => props.featured ? '5px solid hsl(180, 29%, 50%)' : '5px solid hsl(180, 29%, 100%)'} ;
  @media (max-width:700px){
    margin: 45px 20px 20px 20px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
  } 
`;

const ButtonTag: StyledComponent<ButtonProps> = styled(Button)`
  color :hsl(180, 29%, 50%);
  border-radius: 6px;
  background: hsl(180, 52%, 96%);
  margin: 5px;
  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 52%, 96%);
  } 
  &:active {
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 52%, 96%);
  }
`;

const Info = styled.div`
  @media (max-width:700px){
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid hsl(180, 14%, 20%);
  };
  h2{
    user-select: none;
    font-weight: 700;
    color: hsl(180, 14%, 20%);
    cursor: pointer;
    margin-bottom: 0;
  };
  h2:active {
    color: hsl(180, 29%, 50%);
  }
  h3 {
    color: hsl(180, 29%, 50%);
    font-weight: 500;
    display: inline-block;
    margin: 0 10px 0 10px ;
    position: relative;
    top: 2px;
  };
  #new, #featured{
    padding: 4px;
    margin-right: 5px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    letter-spacing: 1px;
    color : hsl(180, 29%, 100%);
  };
  #new{
    background: hsl(180, 29%, 50%);
    border : 2px solid hsl(180, 29%, 50%);
  };
  #featured{
    background: hsl(180, 14%, 20%);
    border : 2px solid hsl(180, 14%, 20%);
  }

  > * {
    margin-left: 10px;
  };
  #info {
    color: hsl(180, 8%, 52%);
    font-weight: 500;
    position: relative;
    left: -10px;
  };
  #info > *{
    white-space: nowrap;  
    margin: 0 10px 0 10px;
  }
`;

const InnerBox = styled(Col)`
  align-items: center;
  width: 100%;
  @media (min-width:700px){
    display: flex;
  }
`;

const Logo = styled.img`
margin: 15px;
@media (max-width:700px){
  position: relative;
  top: -75px;
  height: 60px;
  width: 60px;
  margin-bottom: -60px;
}
`;

const Filters = styled.div`
  text-align: right;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
  margin-right: 15px;
  @media (max-width:700px){
    flex-direction: row;
    text-align: left;
  }
`;

const Fila = styled(Row)`
@media (max-width:700px){
  flex-wrap: wrap;
  `;

type job = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: Array<string>,
  tools: Array<string>
}

type ListItemProps = {
  job: job;
}


const JobCard = ({ job }: ListItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleFilter = (e: MouseEvent<HTMLButtonElement>):void => {
    dispatch(addFilter(e.currentTarget.value));
  }

  return (
    <Box featured={job.featured}>
      <Fila justify="space-between" align="middle" wrap={false}>
        <Col flex={"500px"}>
          <InnerBox>
            <Logo src={job.logo} alt={job.company} />
            <Info>
              <h3>{job.company}</h3>
              {
                job.new && <span id="new">NEW!</span>
              }
              {
                job.featured && <span id="featured">FEATURED</span>
              }
              <h2>{job.position}</h2>
              <span id="info">
                <span>{job.postedAt}</span>
                &middot;
                <span>{job.contract}</span>
                &middot;
                <span>{job.location}</span>
              </span>
            </Info>
          </InnerBox>
        </Col>
        <Col flex={"auto"}>
          <Filters>
            <List
              dataSource={[job.role, job.level, ...job.languages, ...job.tools]}
              renderItem={item => (
                <ButtonTag type="text" value={item} key={item} onClick={handleFilter}>{item}</ButtonTag>
              )}
            />
          </Filters>
        </Col>
      </Fila>
    </Box>
  )
}

export default JobCard;