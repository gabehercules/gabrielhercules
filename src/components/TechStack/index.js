import { Html5 } from '@styled-icons/boxicons-logos/Html5'
import { Css3 } from '@styled-icons/boxicons-logos/Css3'
import { Javascript } from '@styled-icons/boxicons-logos/Javascript'
import { Git } from '@styled-icons/boxicons-logos/Git'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs'
import { Gatsby } from '@styled-icons/remix-fill/Gatsby'
import { Googleanalytics } from '@styled-icons/simple-icons/Googleanalytics'
import { Figma } from '@styled-icons/boxicons-logos/Figma'


import * as S from './styled'


function TechStack() {
    return (
        <S.TechStackWrapper>
            <S.TechStackItem>
                <Html5 />
            </S.TechStackItem>

            <S.TechStackItem>
                <Css3 />
            </S.TechStackItem>

            <S.TechStackItem>
                <Javascript />
            </S.TechStackItem>

            <S.TechStackItem>
                <Git />
            </S.TechStackItem>

            <S.TechStackItem>
                <Github />
            </S.TechStackItem>

            <S.TechStackItem>
                <ReactLogo />
            </S.TechStackItem>

            <S.TechStackItem>
                <Nextdotjs />
            </S.TechStackItem>

            <S.TechStackItem>
                <Gatsby />
            </S.TechStackItem>

            <S.TechStackItem>
                <Googleanalytics />
            </S.TechStackItem>

            <S.TechStackItem>
                <Figma />
            </S.TechStackItem>
        </S.TechStackWrapper>
    )
}

export default TechStack