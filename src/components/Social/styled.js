import styled from 'styled-components';

export const IconsWrapper = styled.div`
    display: flex;
    margin-top: 2rem;
`

export const IconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background-color: var(--background-light);
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid var(--border);

    svg {
        width: 30px;
        fill: var(--primary);
    }

    &:hover {
        border-color: var(--primary);
    }
`