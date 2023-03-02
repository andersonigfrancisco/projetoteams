import {TouchableOpacity} from 'react-native'
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import theme from '@theme/index';


export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type})=>({
  size:12,
  color:type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))`

`;