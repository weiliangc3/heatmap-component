import styled from 'styled-components';

export const WeekContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  //KING DEDEDE
  background-color: #DEDEDE;
`;

export const Week = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayContainer = styled.div<DayContainerProps>`
  height: 16px;
  width: 16px;
  margin: 2px;
  background: ${(props) => props.colour};
`;

interface DayContainerProps {
  colour: string,
}
