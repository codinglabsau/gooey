import { NodeTypes } from "@vue/compiler-core"

export default function stripAttributes(node) {
  if (node.type === NodeTypes.ELEMENT) {
    node.props = node.props.filter(prop =>
      prop.type === NodeTypes.ATTRIBUTE ? prop.name !== 'data-cy' : true
    );
  }
}
