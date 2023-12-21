import Button from "@/components/UI/Button";
import ButtonAsLink from "@/components/UI/Button/Link";
import Link from "@/components/UI/Link";
import LinkAsButton from "@/components/UI/Link/Button";
import Typography from "@/components/UI/Typography";

export default function Home() {
  return (
    <main>
      <Typography as="h1" variant="display1">
        Test
      </Typography>
      <Link href="/">This is a link</Link>
      <LinkAsButton>This is a button styled as a link</LinkAsButton>
      <Button>Click me!</Button>
      <ButtonAsLink href="/">I am a link</ButtonAsLink>
    </main>
  );
}
