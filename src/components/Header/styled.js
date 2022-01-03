import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 3vh 0;

    ${media.lessThan("medium")`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    `}
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p > span {
        font-size: .9rem;
        vertical-align: middle;
        color: var(--text);
        font-weight: 600;
    }

    p > span::after {
        content: 'v0.1 beta';
        font-size: .7rem;
        font-weight: 500;
        background-color: var(--background-dark);
        padding: .4rem .6rem;
        margin-left: .5rem;
        border-radius: .3rem;
    }
`

export const BtnContacts = styled.div`
    display: flex;
    gap: 1rem;
`

export const Contact = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-light);
    padding: .9rem 1.1rem;
    border-radius: .8rem;
    border: 1px solid var(--border);
    vertical-align: middle;
    text-decoration: none;
    color: var(--text);

    &:hover {
        border-color: var(--primary);
    }

    svg {
        margin-right: .5rem;
        width: 18px;
        fill: var(--primary);
    }
`
