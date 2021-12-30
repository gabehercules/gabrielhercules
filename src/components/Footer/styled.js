import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background-color: var(--background-light);
    display: flex;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    p {
        font-size: 0.8rem;
        line-height: 100%;
        color: var(--text-dark);

        a {
            text-decoration: none;
            color: var(--primary);
        }
    }

`