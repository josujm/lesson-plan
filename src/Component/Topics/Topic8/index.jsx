


import { useNavigate } from "react-router-dom";
const Topic8 = () => {

    const navigate = useNavigate();
    return( 
        <div>

<h2>Topic 8</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic8/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic8/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic8/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic8/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic8/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic8/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic8/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic8/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic8;