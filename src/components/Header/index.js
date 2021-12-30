import Link from 'next/link'
import * as S from './styled'
import { At as Arroba } from '@styled-icons/boxicons-regular/At'
import { Download } from '@styled-icons/boxicons-regular/Download'


function Header() {
    return (
        <S.HeaderWrapper>
            <S.Logo>
                <p><span>Gabriel Hercules</span></p>
            </S.Logo>
            <S.BtnContacts>
                <Link href="mailto:gabrielsyze@gmail.com" passHref>
                    <S.Contact>
                        <Arroba />
                        Contato
                    </S.Contact>
                </Link>
                <Link href="https://drive.google.com/file/d/1soWtO13gDGgSjCOBSx_k2vR5t7e0EHY7/view?usp=sharing" passHref>
                    <S.Contact target="_blank" rel="noopener noreferrer">
                        <Download />
                        Download CV
                    </S.Contact>
                </Link>
            </S.BtnContacts>
        </S.HeaderWrapper>
    )
}

export default Header
