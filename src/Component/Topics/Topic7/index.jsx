




import { useNavigate } from "react-router-dom";
const Topic7 = () => {

    const navigate = useNavigate();
    return( 
        <div>

<h2>Topic 7</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic7/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic7/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic7/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic7/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic7/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic7/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic7/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic7/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic7;