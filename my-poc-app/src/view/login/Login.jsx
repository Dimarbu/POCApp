import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, InputGroup, InputRightElement, InputLeftElement, Stack, Center } from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Login = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [data, setData] = useState([]);
    /* const [isUserLogin, setIsUserLogin] = useState(false); */
    const getDataCredentials = () => {
        fetch('data.json')
            .then((credentials) => credentials.json())
            .then((data) => setData(data));
    };
    useEffect(() => {
        getDataCredentials();
    }, []);

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };

    const validateUserData = () => {
        if (JSON.stringify(user) === JSON.stringify(data)) {
            localStorage.setItem('key', JSON.stringify(data));
            return true
        } else {
            return false
        }
    };
    
    const validateActiveSession = () => {
        const sessionActive = localStorage.getItem('key');
        if (sessionActive === JSON.stringify(data)) {
            navigate('/Home')
        } 
    };
    validateActiveSession();

    return (
        <Center width='100%' height='100vh'>
            <Stack spacing={4} w='35%' >
                <InputGroup border='#3A537C' className='inputEmail' size='sm' >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EmailIcon color='#3A537C' />}
                    />
                    <Input type='email' placeholder='Email' borderRadius='8px' onChange={handleInputChange} name="email" />
                </InputGroup>

                <InputGroup border='#3A537C' size='sm'>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<LockIcon color='#3A537C' />}
                    />
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        borderRadius='8px'
                        onChange={handleInputChange} name="password"
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.5rem' size='sm' bg={'transparent'} onClick={handleClick}>
                            {show ? <ViewIcon color='#3A537C' /> : <ViewOffIcon color='blue.300' />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button bg='#3A537C' textColor='white' size='sm' onClick={() =>
                    validateUserData() ? navigate('/Home') :  `Ingresa un correo y contraseña valido`  }>LogIn</Button>
            </Stack>
        </Center>
    );

};

export default Login;
