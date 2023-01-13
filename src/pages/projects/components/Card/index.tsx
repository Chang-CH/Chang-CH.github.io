import { Badge, Button, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai';
import Spinner from '_components/Spinner';

interface ProjectCardProps {
  preview: string;
  tech: Array<string>;
  title: string;
  description: string;
  link?: string;
  source?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card width="100%">
      <CardBody width="100%" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
        {props.preview ? (
          <Image src={props.preview} alt="draw2p preview" fallback={<Spinner />} maxHeight="300px" />
        ) : null}
        <Stack width="100%">
          <Stack direction="row" marginRight="auto" justifyContent="center" alignItems="center">
            <Heading size="md">{props.title}</Heading>
            {props.tech.map((name: string, index: number) => (
              <Badge key={index} colorScheme="orange">
                {name}
              </Badge>
            ))}
          </Stack>
          <Text width="100%">{props.description}</Text>
          <Stack direction="row" style={{ marginLeft: 'auto', marginTop: 'auto' }}>
            {props.link ? (
              <a href={props.link}>
                <Button variant="ghost" leftIcon={<AiOutlineSearch />} colorScheme="orange" border="none">
                  View
                </Button>
              </a>
            ) : null}
            {props.source ? (
              <a href={props.source}>
                <Button variant="ghost" leftIcon={<AiFillGithub />} colorScheme="orange" border="none">
                  Source
                </Button>
              </a>
            ) : null}
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
