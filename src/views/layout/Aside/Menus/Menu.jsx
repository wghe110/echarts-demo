import { defineComponent } from 'vue'
import renderFn from './render'

export default defineComponent({
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props) {
    return () => renderFn(props.list)
  },
});