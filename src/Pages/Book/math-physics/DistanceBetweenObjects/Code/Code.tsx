import {
  ConstVariable,
  ObjectExpression,
} from "../../../../../code-components/js-code/js-code";

import { Number } from "../../../../../code-components/colored-code-components/js/js";

export function ObjectA() {
  return (
    <ConstVariable name="A">
      <ObjectExpression
        propertys={[
          { property: "x", value: <Number value="2" /> },
          { property: "y", value: <Number value="2" /> },
        ]}
      />
    </ConstVariable>
  );
}

export function ObjectB() {
  return (
    <ConstVariable name="B">
      <ObjectExpression
        propertys={[
          { property: "x", value: <Number value="8" /> },
          { property: "y", value: <Number value="10" /> },
        ]}
      />
    </ConstVariable>
  );
}
