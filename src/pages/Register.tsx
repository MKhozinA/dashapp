import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
  } from '@mantine/core';
import { Link } from 'react-router-dom';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: rem(900),
      backgroundSize: 'cover',
      backgroundImage:
        'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
      minHeight: rem(900),
      maxWidth: rem(450),
      paddingTop: rem(80),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));
  
  export default function RegisterPage() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Register
          </Title>
          <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
          <TextInput label="Nama Lengkap" placeholder="masukkan nama lengkap" size="md" />
          <TextInput label="NIM" placeholder="masukkan NIM" size="md" />
          <TextInput label="Nomor Telpon" placeholder="masukkan nomor telpon" size="md" />
          <TextInput label="Tanggal lahir" placeholder="masukkan tanggal lahir" size="md" />
          <TextInput label="Alamat" placeholder="masukkan alamat" size="md" />
          <TextInput label="Tahun Masuk" placeholder="tahun masuk kuliah" size="md" />
          <TextInput label="Tahun Lulus" placeholder="tahun lulus kuliah" size="md" />
          <Button fullWidth mt="xl" size="md" component={Link} to="/login">
            Register
          </Button>
  
          <Text ta="center" mt="md">
            have an account?{' '}
            <Link to="/login">
              Login
            </Link>
          </Text>
        </Paper>
      </div>
    );
  }