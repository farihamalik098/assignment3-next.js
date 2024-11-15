
 interface Data{
    Name : string;
    Rollno :number;
    Age :number| string;
    Address:string;
    slot?:string;
    Teacher: string;

 }
function StudentsData(props:Data){
    return( 
        <div>
           
            <ul>
                 <li>{props.Name}</li>
                 
                 <li>{props.Age}</li>
                 <li>{props.Rollno}</li>
                <li>{props.Address}</li>
                 <li>{props.slot}</li>
                <li>{props.Teacher}</li>


            </ul>

        </div>
     )
 }
 export default StudentsData