import { Input,Button } from 'rsuite';
import {useForm} from "react-hook-form"




export const Getcordinates=()=>{
    return(
        <form>
            <Input className='border border-black'></Input>
            <Button type="submit">Senden</Button>
        </form>
    )
}