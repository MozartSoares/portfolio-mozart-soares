import { PulseLoader } from 'react-spinners'
import { colors } from '../../GlobalStyles'

type Props = {
  size: number
}

export const Loader = ({ size }: Props) => (
  <PulseLoader size={size} className="loader" color={colors.mainColor} />
)

export default Loader
