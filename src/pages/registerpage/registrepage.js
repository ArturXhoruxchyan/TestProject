import {useForm} from 'react-hook-form'
import Input from '../../components/Input/input'
import "./registrepage.css"

const Register =()=>{
    const inputBlock=[
        {
            id:1,
            name:"firstName",
            type:"text",
            placeholder:"first name"
        },
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder:"list name"
        },
        {
            id:3,
            name:"email",
            type:"email",
            placeholder:"email"
        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"password",
        },
    ]
    const {handleSubmit,control}=useForm();
    const onSubmit=(data)=>console.log(data);
    return(
        <div className='formheader' >
            <form onSubmit={handleSubmit(onSubmit)} >
             {inputBlock.map((e)=>(
                <div key={e.id} >
                    <Input name={e.name} control={control} type={e.type} placeholder={e.placeholder} />
                </div>
             ))}
             {/* <Input name="firstName" control={control} type="text"placholder="first name" />
             <Input name="lastName" control={control} type="text"placholder="last name" />
             <Input name="email" control={control} type="email"placholder="email" />
             <Input name="password" control={control} type="password"placholder="password" /> */}
             <input type='submit' value={"Submit"} />
            </form>

        </div>
    )
}
export default Register