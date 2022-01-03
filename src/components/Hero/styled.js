import styled from "styled-components";
import media from "styled-media-query"

export const HeroWrapper = styled.div`
    /* flex: 1; */
    padding-top: 10vh;
    
    p {
        color: var(--text-dark);
    }

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: var(--text);
        max-width: 80%;

        ${media.lessThan("medium")`
            font-size: 2.7rem;
            max-width: 100%;
            margin-top: 1rem;
        `}
    }
`