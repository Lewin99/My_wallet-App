import styled from "styled-components";

export const StyledDoughnutChart = styled.div`
  width: 100%;
  margin-top: 4px;
  display: flex;
  margin-left: 45px;
`;

export const DoughnutContainer = styled.div`
  width: 100%;
`;

export const LeftLegend = styled.div`
  width: 50%;
  padding: 5px;
`;

export const RightLegend = styled.div`
  width: 50%;
  margin-top: 8px;
  padding-right: 6px;
`;

export const LegendItem = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 3px;
  color: ${(props) => props.theme.textColor};
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8rem;
`;

export const Dot = styled.div<{ bgColor: string }>`
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 2px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Amount = styled.div`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 4px;
  font-size: 0.8rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
