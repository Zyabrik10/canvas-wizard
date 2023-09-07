import {
  FormatP,
  FormatTitleH2,
  FormatTitleH3,
} from "../../code-components/format-components/format-components";
import { CodeBox } from "../../components/CodeBox/CodeBox";
import InfoBox from "../../components/InfoBox/InfoBox";

export default function Support() {
  return (
    <>
      <FormatTitleH2>Support</FormatTitleH2>
      <FormatP>
        There will be a more conventional and convenient payment method
        available soon. However, for now, you can simply transfer funds from one
        card to another.
      </FormatP>
      <InfoBox dir="row" type="warn">
        <FormatP>
          Please note that Monobank may apply a tax, typically around 4%,
          according to your bank's policies. Additionally, Monobank accepts
          money transfers starting from $1.
        </FormatP>
      </InfoBox>
      <FormatTitleH3>Dollars</FormatTitleH3>
      <CodeBox>5375418810243352</CodeBox>
      <FormatTitleH3>Euros</FormatTitleH3>
      <CodeBox>5375419909440263</CodeBox>
      <FormatTitleH3>Hrywna</FormatTitleH3>
      <CodeBox>4441114460724253</CodeBox>
    </>
  );
}
