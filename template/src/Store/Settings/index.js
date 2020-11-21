import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import InitSettings from './Init'

const sliceInitialState = {
  item: {
    colorScheme: "light",
    lang: "it",
    configuration: true
  }
}

export default buildSlice('settings', [InitSettings], sliceInitialState,
(builder) => { console.log("builder", builder) }

).reducer
