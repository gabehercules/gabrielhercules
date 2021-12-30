import links from './content'
import Icons from './Icons'
import * as S from './styled'

const Social = () => (
    <S.IconsWrapper>
        {links.map((link, index) => {
            const Icon = Icons[link.label]

            return (
                <S.IconLink key={index} href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                    <Icon />
                </S.IconLink>
            )

        })}
    </S.IconsWrapper >
)

export default Social
