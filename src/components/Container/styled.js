import styled from "styled-components";
import media from "styled-media-query";

export const ContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`

export const ContainerCenter = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;

    ${media.lessThan("large")`
        padding: 0 1rem;
    `}
`