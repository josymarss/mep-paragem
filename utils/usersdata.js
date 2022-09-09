import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        id:uuidv4(),
        name:'João António',
        avatar:require("../assets/1.jpg"),
        destination:'Centralidade do Kilamba, Bloco F local da cantina, próximo a africell',
        phoneNumber:'946231046',
        state:false
    },
    {
        id:uuidv4(),
        name:'Maria João Nunes',
        avatar:require('../assets/2.jpg'),
        destination:'Centralidade do Kilamba, Bloco F local da cantina, próximo a africell',
        phoneNumber:'946231046',
        state:false
    },
    {
        id:uuidv4(),
        name:'Josemar Silva António',
        avatar:require('../assets/josymarss.jpeg'),
        destination:'Centralidade do Kilamba, Bloco F local da cantina, próximo a africell',
        phoneNumber:'946231046',
        state:false
    },
    {
        id:uuidv4(),
        name:'Maria Ruca Neves',
        avatar:require('../assets/3.jpg'),
        destination:'Centralidade do Kilamba, Bloco F local da cantina, próximo a africell',
        phoneNumber:'946231046',
        state:false
    },
    {
        id:uuidv4(),
        name:'Joy Taylor ',
        avatar:require('../assets/profile.png'),
        destination:'Centralidade do Kilamba, Bloco F local da cantina, próximo a africell',
        phoneNumber:'946231046',
        state:false
    },
    {
        id:uuidv4(),
        name:'Nzola Joana',
        avatar:require('../assets/5.jpg'),
        destination:'Centralidade do Kilamba, Bloco F local da cantina, próximo a africell',
        phoneNumber:'946231046',
        state:false
    },
    {
        id:uuidv4(),
        name:'Mazinene Wiza',
        avatar:require('../assets/7.jpg'),
        destination:'Gameque a direira do depois da pedonal',
        phoneNumber:'946231046',
        state:false
    },
];

export default data;