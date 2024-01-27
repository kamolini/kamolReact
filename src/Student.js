import React from "react";
import useAxiosGet from "./Hooks/HttpRequest";
import axios from "axios";
 

function Student(){

    const url ="http://localhost:8081/api/v1/student/students"

    let student = useAxiosGet(url);
    let content = <p>Getting Student</p>;

    




    if(student.error){
        content = 
            <p> Product not available</p>
    }

    if(student.data){
        content =  
                student.data.map((student)=>
                    <div key={student.id}>
                        <span> {student.id}</span>
                        <span> {student.email}</span>
                    
                        
                    </div>
                )
            
        
    }
    return(
        <div>{content}</div>
    )

}

export default Student;