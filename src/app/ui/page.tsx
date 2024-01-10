import Accordion from "@/components/UI/Accordion";
import Button from "@/components/UI/Button";
import IconButton from "@/components/UI/IconButton";
import Link from "@/components/UI/Link";
import ToggleModalExample from "@/components/UI/Modal/ToggleModalExample";
import Typography from "@/components/UI/Typography";
import styles from "./styles.module.css";

export default function UIPage() {
  return (
    <main className={styles.container}>
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
        <Button size="small" withIcon icon="ArrowRight">
          This is a primary medium with icon button
        </Button>
        <Button
          size="small"
          withIcon
          icon="ArrowRight"
          variant="secondary"
        >
          This is a secondary medium button with icon
        </Button>
        <Button>This is a primary medium button</Button>
        <Button variant="secondary">This is a secondary medium button</Button>
        <Button withIcon icon="ArrowRight">
          This is a primary medium with icon button
        </Button>
        <Button withIcon icon="ArrowRight" variant="secondary">
          This is a secondary medium button with icon
        </Button>
        <Button size="large">This is a primary large button</Button>
        <Button variant="secondary" size="large">
          This is a secondary large button
        </Button>
        <Button size="large" withIcon icon="ArrowRight">
          This is a primary medium with icon button
        </Button>
        <Button
          size="large"
          withIcon
          icon="ArrowRight"
          variant="secondary"
        >
          This is a secondary medium button with icon
        </Button>
      </section>
      <section>
        <IconButton size="small" icon="Basket" />
        <IconButton size="small" variant="secondary" icon="Basket" />
        <IconButton icon="Basket" />
        <IconButton variant="secondary" icon="Basket" />
        <IconButton size="large" icon="Basket" />
        <IconButton size="large" variant="secondary" icon="Basket" />
      </section>
      <section>
        <Accordion title="This is a modal">
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
    </main>
  );
}
