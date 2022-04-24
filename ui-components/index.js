import UiHeader from './ui-header/ui-header.js'
import UiSidebar from './ui-sidebar/ui-sidebar.js'
import CodeBlock from './ui-code-block/ui-code-block.js'
import UiCode from './ui-code/ui-code.js'

const UiComponents = () => {
  customElements.define('ui-header', UiHeader)
  customElements.define('ui-sidebar', UiSidebar)
  customElements.define('ui-code-block', CodeBlock)
  customElements.define('ui-code', UiCode)
}

export default UiComponents