import React from 'react';
import { createStyles, Title, Text, Anchor, Container, Group, Paper, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({


    wrapper: {
        // subscribe to color scheme changes right in your styles
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        width: '100vw',
        height: '100vh',
    },

    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

export default function ErrorPage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Paper className={classes.wrapper}>
        <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Unfortunately, this is only a 404 page. You may have entered a private or invalid user ID, or the page has
            been moved to another URL.
        </Text>
        <Group position="center">
            <Anchor href="/">
                Back to home page
            </Anchor>
        </Group>
        </Container>
    </Paper>
  );
}