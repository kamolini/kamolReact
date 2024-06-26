import React from "react";
import useAxiosGet from "./Hooks/HttpRequest"; 
import SliderComponent from "./components/SliderComponent";
import Loader from "./components/Loader";

function Student(){

    const url ="http://localhost:8081/api/v1/student/students"

    let student = useAxiosGet(url);
    let content =        <div>||||||||||||||||||</div>     


    if(student.error){
        content = 
            <p> Product not available</p>
    }

    if(student.data){
        content =  
            student.data.map((student)=>
                <div key={student.id}>
                    <span> {student.id} </span>
                    <span> {student.email} </span>
                
                    
                </div>
            )
            
    }
    return(
        <div>
            {content}
            <SliderComponent></SliderComponent>
        </div>
    )

}

export default Student;