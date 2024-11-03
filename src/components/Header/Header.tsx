import Heading from "@theme/Heading";

type Props = {
  title: string;
  description: string;
};

export default function Header({ title, description }: Props) {
  return (
    <header className="margin-bottom--lg">
      <Heading as="h1" dangerouslySetInnerHTML={{ __html: title }} />
      <p>{description}</p>
    </header>
  );
}
