import Block from "../../../../components/Block";
import Code from "../../../../components/Code";
import Container from "../../../../components/Container";
import SubPageHeading from "../../../../components/SubPageHeading";
import { examples } from "../../../../examples";
import { Demo } from "../../../../examples/guides/right-click";
import styles from "./styles.module.css";

export default function RightClickRoute() {
  return (
    <Container>
      <Block>
        <SubPageHeading title="Right-click menu " />
      </Block>
      <Demo className={styles.Trigger} />
      <Code code={examples.rightClick} />
    </Container>
  );
}
