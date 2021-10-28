import styled from "styled-components";

export const Container = styled.div`
  
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Product = styled.div`
    background:#fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    padding: 20px;
    box-shadow: 2px 4px 4px 2px rgba(0,0,0,0.5);
    margin: 5px;
    img {
        width: 100%;
        margin: 10px;
        max-width: 50%;
    }
    h3 {
        margin: 10px;
        font-size: 13px;
    }

    p {
        font-weight: bold;
    }

`;
