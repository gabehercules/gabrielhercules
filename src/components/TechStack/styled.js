import styled from 'styled-components'

export const TechStackWrapper = styled.div`
    display: flex;
    padding-top: 10vh;
    flex-wrap: wrap;
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
    } 

    svg {
        width: 50px;
        fill: var(--primary);
    }
`