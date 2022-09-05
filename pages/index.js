import { Card, Avatar, Grid, Button, Loading, Text, Row, Link } from "@nextui-org/react";
import { CameraIcon } from "../components/CameraIcon";
import { HeartIcon } from "../components/HeartIcon";
import { SunIcon } from "../components/SunIcon";
export default function App() {
  const nameUsers = ["Junior", "Jane", "W", "John", "JR"];
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  ];
  return (
    <div>
      <Grid.Container gap={2}>
        <Grid xs={4}>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <img
                alt="nextui logo"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width="34px"
                height="34px"
              />
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Next UI
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>nextui.org</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text>A Basic Card</Text>
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </Card.Footer>
          </Card>
        </Grid>

      </Grid.Container>

      <Button.Group size="xl" color="gradient" ghost>
        <Button>
          <Loading color="primary" />
        </Button>
        <Button>Two</Button>
        <Button>Three</Button>

      </Button.Group>
      <Grid.Container justify="center">
        <Grid>
          <Button
            color="error"
            icon={<HeartIcon fill="currentColor" filled />}
          />
        </Grid>
        <Grid>
          <Button iconRight={<CameraIcon fill="currentColor" />}>
            Take a photo
          </Button>
        </Grid>
      </Grid.Container>


      <Grid.Container justify="center">
        <Grid>
          <Button disabled auto bordered shadow rounded flat color="primary" css={{ px: "$12" }} >
            <Loading color="currentColor" size="sm" />
          </Button>
        </Grid>
        <Grid>
          <Button disabled auto bordered color="primary" css={{ px: "$13" }}>
            <Loading type="spinner" color="currentColor" size="sm" />
          </Button>
        </Grid>
        <Grid>
          <Button auto flat color="error" css={{ px: "$13" }}>
            <Loading type="points" color="error" size="sm" />
          </Button>
        </Grid>
        <Grid>
          <Button auto bordered color="primary" css={{ px: "$13" }}>
            <Loading type="points-opacity" color="currentColor" size="sm" />
          </Button>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify="center">

        <Grid xs={12} justify="center">
          <Avatar.Group count={12}>
            {nameUsers.map((name, index) => (
              <Avatar key={index} size="lg" pointer text={name} stacked />
            ))}
          </Avatar.Group>
        </Grid>
        <Grid xs={12} justify="center">
          <Avatar.Group count={12}>
            {pictureUsers.map((url, index) => (
              <Avatar
                key={index}
                size="lg"
                pointer
                src={url}
                bordered
                color="gradient"
                stacked
              />
            ))}
          </Avatar.Group>
        </Grid>
        <Grid>
          <Avatar
            squared
            icon={<SunIcon size={100} />}
            css={{ size: "$40" }}
          />
        </Grid>
        <Grid>
          <Avatar

            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="xl"
            bordered
            color="primary"
            zoomed
          />
        </Grid>
        <Grid>
          <Avatar

            text="Junior"
            color="primary"
            textColor="white"
          />
        </Grid>
        <Grid>
          <Avatar

            src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        </Grid>
        <Grid>
          <Avatar

            text="Jane" />
        </Grid>
        <Grid>
          <Avatar
            squared
            bordered
            color="error"
            zoomed
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            css={{ size: "$30" }}
          />

        </Grid>
        <Grid>
          <Avatar

            text="Joe"

          />
        </Grid>
      </Grid.Container>
    </div >
  );
}
