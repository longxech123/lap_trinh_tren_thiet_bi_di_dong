import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { ButtonPresetNames } from './button.presets';
// import { TxKeyPath } from "../../i18n"

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  tx?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames;

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode;

  /**
   * An optional loading indicator
   */
  loading?: boolean;
}
