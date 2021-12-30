import * as S from './styled'
function Container({ children }) {
    return (
        <S.ContainerWrapper>
            <S.ContainerCenter>
                {children}
            </S.ContainerCenter>
        </S.ContainerWrapper>
    )
}

export default Container
