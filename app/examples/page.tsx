import DepartmentCard from "@/components/molecules/departmentcard"
import DoctorCard from "@/components/molecules/doctorcard"

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

        <DoctorCard 
        id='1'
        name='Dr. Jin Yang'
        specialty='Dental'
        rating={4.9}
        reviewCount={100}
        imageUrl="https://images.unsplash.com/photo-1645066928295-2506defde470?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
    );
}