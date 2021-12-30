import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    flex: 1;
    align-items: flex-end;
    padding: 1rem;
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