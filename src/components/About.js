import { useSelector } from "react-redux"

const About = () =>{
    const user = useSelector(state=>state)
    return(
        <div>
            <p>from about</p>
          <p>{`${user.firstName} ${user.lastName} ${user.password}`}</p>
        </div>
    )
}
export default About