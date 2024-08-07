import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate()


    return (
        <div className="main-div" >
            <div>
                <h1>MULTILEVEL GLOSSING STRATEGY </h1>
                <h2> RIKKI TIKKI TAWI </h2>
            </div>
            <ol className="ordered-list">
                <li onClick={() => navigate('/topic1')}>Topic 1</li>
                <li onClick={() => navigate('/topic2')}>Topic 2</li>
                <li onClick={() => navigate('/topic3')}>Topic 3</li>
                <li onClick={() => navigate('/topic4')}>Topic 4</li>
                <li onClick={() => navigate('/topic5')}>Topic 5</li>
                <li onClick={() => navigate('/topic6')}>Topic 6</li>
                <li onClick={() => navigate('/topic7')}>Topic 7</li>
                <li onClick={() => navigate('/topic8')}>Topic 8</li>
                <li onClick={() => navigate('/topic9')}>Topic9</li>
                <li onClick={() => navigate('/topic10')}>Topic 10</li>                
            </ol>
        </div>

    )
}
export default MainPage;