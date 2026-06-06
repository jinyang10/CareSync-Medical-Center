import DepartmentCard from "@/components/molecules/departmentcard"

export default function Examples() {

    const sampleDepartment={
        id: 'dept-1',
        name:'Dermatology',
        iconName:"Syringe",
    }
    return(
        <div className="flex flex-col justify-center items-center mt-10 ">
            <div>
                <DepartmentCard
                name={sampleDepartment.name} 
                iconName={sampleDepartment.iconName} 
                id={sampleDepartment.id}  
                />
            </div> 
            
        </div>
    )
}