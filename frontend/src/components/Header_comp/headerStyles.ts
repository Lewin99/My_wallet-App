import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-bottom: 3px solid rgba(132, 139, 200, 0.18);
`;

export const Info = styled.div`
  margin-right: 10px;
  color: #46484a;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8rem;
`;

export const ProfilePhoto = styled.div`
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
