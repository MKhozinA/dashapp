import { createStyles, Header, Menu, Group, Center, Burger, Container, rem, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import banner from "../assets/bannerumy.png";
import { Link, NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.colors.green[8] }).background,
        borderBottom: 0,
    },

    inner: {
        height: rem(86),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            ),
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },
}));

type LinkItem = {
    link?: string;
    label?: string;
    links?: LinkItem[];
};

interface HeaderSearchProps {
    links: LinkItem[];
}

export function HeaderMenuColored({ links }: HeaderSearchProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item component={Link} to={item.link??"#"}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <NavLink
                            to={link.link || ""}
                            className={classes.link}
                            // onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </NavLink>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <NavLink
                key={link.label}
                to={link.link || ""}
                className={classes.link}
                // onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </NavLink>
        );
    });

    return (
        <Header height={86} className={classes.header}>
            <Container>
                <div className={classes.inner}>
                    <Image width={64} src={banner} />
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        color="#fff"
                    />
                </div>
            </Container>
        </Header>
    );
}