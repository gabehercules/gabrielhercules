import styled from 'styled-components'
import media from 'styled-media-query'

export const TechStackWrapper = styled.div`
    display: flex;
    padding-top: 10vh;
    flex-wrap: wrap;

    ${media.lessThan("small")`
        padding-top: 7vh;
        gap: 20px;
    `}
`

export const TechStackItem = styled.div`

    &:not(:last-child)::after {
        content: '';
        display: inline-flex;
        width: 56px;
        height: 1px;
        background-color: var(--border);
        vertical-align: middle;
        margin: 0 7px;

        ${media.lessThan("small")`
            display: none;
        `}
    } 

    svg {
        width: 50px;
        fill: var(--primary);
    }
`