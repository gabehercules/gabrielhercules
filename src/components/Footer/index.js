import * as S from './styled'

function Footer() {
    function getActualYear() {
        let date = new Date()
        return date.getFullYear()
    }

    return (
        <S.FooterWrapper>
            <p>© {getActualYear()}. Gabriel Hercules. Feito com <a href="https://nextjs.com" rel="nofollow noreferrer" target="_blank">Next.js</a></p>
        </S.FooterWrapper>
    )
}
export default Footer
