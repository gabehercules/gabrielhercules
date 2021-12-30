import Link from 'next/link'
import * as S from './styled'
import { At as Arroba } from '@styled-icons/boxicons-regular/At'


function Header() {
    return (
        <S.HeaderWrapper>
            <S.Logo>
                <p><span>Gabriel Hercules</span></p>
            </S.Logo>
            <Link href="mailto:gabrielsyze@gmail.com" passHref>
                <S.Contact>
                    <Arroba />
                    Contato
                </S.Contact>
            </Link>
        </S.HeaderWrapper>
    )
}

export default Header
