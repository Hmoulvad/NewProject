import {
  Accordion,
  Button,
  Dropdown,
  Link,
  PageContainer,
  Typography,
} from "@/components/UI";
import ToggleModalExample from "@/components/UI/Modal/ToggleModalExample";
import Tooltip from "@/components/UI/Tooltip";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Basket } from "@phosphor-icons/react/dist/ssr/Basket";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI",
};

export default function UIPage() {
  return (
    <PageContainer>
      <section>
        <Tooltip message="Great message">Hover me to show Tooltip</Tooltip>
      </section>
      <section>
        <Dropdown label="Label" options={["Item1", "Item2", "Item3"]} />
      </section>
      <section>
        <Typography as="h1" variant="display1">
          This is a display 1...
        </Typography>
        <Typography as="h2" variant="display2">
          This is a display 2...
        </Typography>
        <Typography as="h3" variant="display3">
          This is a display 3...
        </Typography>
        <Typography as="h4" variant="display4">
          This is a display 4...
        </Typography>
        <Typography as="h5" variant="display5">
          This is a display 5...
        </Typography>
        <Typography variant="body">This is a body...</Typography>
        <Typography variant="caption">This is a caption...</Typography>
      </section>
      <section>
        <Link href="/">This is a link</Link>
      </section>
      <section>
        <Button size="small">This is a primary small button</Button>
        <Button variant="secondary" size="small">
          This is a secondary small button
        </Button>
        <Button size="small" icon={<ArrowRight />}>
          This is a secondary small button with icon
        </Button>
        <Button size="small" icon={<ArrowRight />} variant="secondary">
          This is a secondary medium button with icon
        </Button>
        <Button>This is a primary medium button</Button>
        <Button variant="secondary">This is a secondary medium button</Button>
        <Button icon={<ArrowRight />}>
          This is a primary medium with icon button
        </Button>
        <Button icon={<ArrowRight />} variant="secondary">
          This is a secondary medium button with icon
        </Button>
        <Button size="large">This is a primary large button</Button>
        <Button variant="secondary" size="large">
          This is a secondary large button
        </Button>
        <Button size="large" icon={<ArrowRight />}>
          This is a primary medium with icon button
        </Button>
        <Button size="large" icon={<ArrowRight />} variant="secondary">
          This is a secondary medium button with icon
        </Button>
      </section>
      <section>
        <Button size="small" icon={<Basket />} />
        <Button size="small" variant="secondary" icon={<Basket />} />
        <Button icon={<Basket />} />
        <Button variant="secondary" icon={<Basket />} />
        <Button size="large" icon={<Basket />} />
        <Button size="large" variant="secondary" icon={<Basket />} />
      </section>
      <section>
        <Accordion title="This is an Accordion">
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            repellat blanditiis neque iure quisquam velit enim necessitatibus
            deserunt quo facilis? Veritatis nulla quasi illum aspernatur,
            numquam aliquam autem laborum repellendus!
          </Typography>
        </Accordion>
      </section>
      <section>
        <ToggleModalExample />
      </section>
    </PageContainer>
  );
}
