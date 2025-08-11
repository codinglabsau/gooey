import { BaseElementNode, NodeTypes } from "@vue/compiler-core"

const attributesToStrip = [
  'data-cy'
]

export default function stripAttributes(node: BaseElementNode) {
  if (node.type === NodeTypes.ELEMENT) {
    node.props = node.props.filter(prop =>
      prop.type === NodeTypes.ATTRIBUTE ? ! attributesToStrip.includes(prop.name) : true
    )
  }
}
