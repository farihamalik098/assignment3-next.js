
import StudentsData from "@/components/button";



function Homepage() {
  return (
    <div className="flex justify-evenly items-center h-screen">
      <StudentsData Name="Fariha malik" Age={19} Rollno={137706} Address="defence,karachi,sindh" slot="monday afternoon" Teacher="sir asahrib ali" />

      <StudentsData Name="Farhan malik" Age={18} Rollno={137704} Address="korangi,karachi,sindh" slot="friday morning" Teacher="sir hamza" />
      <StudentsData Name="Aliza shah " Age={16} Rollno={137705} Address="new nazimabad,karachi,sindh" slot="thursday evening" Teacher="sir bilal" />
    </div>
  )
}
export default Homepage