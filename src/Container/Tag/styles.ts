import styled from 'styled-components'

import { Props } from '.'
import variaveis from '../../Styles/variaveis'

export const TagContainer = styled.div<Props>`
    background-color: ${variaveis.rose};
    color: ${variaveis.branco};
    font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
    font-weigth: bold;
    padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
    border-radius: 8px;
    display: inline-block;
`
