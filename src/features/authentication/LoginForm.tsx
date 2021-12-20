import { Button, Container, FormControl, FormHelperText, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Box } from "@mui/system";

interface User {
    githubCredential: string
}
export const LoginForm:FC = () => {
    const { handleSubmit, control } = useForm<User>()
    const router = useRouter()
    const onSubmit = (userData: User) => {
        if(!userData.githubCredential) return
        window.sessionStorage.setItem('githubUser', userData.githubCredential)
        router.push('/home')
    }

    return <Container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
    }}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50vw',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            background: '#e9f1ed',
            rowGap: '16px',
            background: '#DB324D'
        }}>
        <Controller
            name='githubCredential'
            control={control}
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, error },
            }) => (
              <FormControl error={invalid}>
                <TextField
                  id={name}
                  name={name}
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  onBlur={onBlur}
                  label='Github username'
                  sx={{
                    background: '#ffffffe0',
                    borderRadius: '4px'
                  }}
                />
                <FormHelperText >{error?.message}</FormHelperText>
              </FormControl>
            )}
          />
        <Button type='submit' variant='contained' >Acessar</Button>
        </Box>
    </form>
    </Container>
}