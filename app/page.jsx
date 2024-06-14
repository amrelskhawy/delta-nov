'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StudentInfo from "@/components/StudentInfo";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function Home() {
  const [studentsData, setStudentData] = useState([])
  const [student, setStudent] = useState()
  const router = useRouter()

  const [id, setID] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('/dessoq-data.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      let students = await response.json();
      setStudentData(students)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false)

    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  const naviagate = () => {
    if (id.length === 14) {
      router.push('student/' + id)
    }
  }

  if (loading) {
    return (
      <p>loading ...</p>
    )
  } else {
    return (
      <div className=" min-h-screen relative">
        <Header />

        <div className="container grid  mx-auto text-center justify-center">
          <div>
            <h2 className="md:text-3xl text-2xl my-8  font-bold" >
              نتيجة دفعه نوفمبر الترم الثانى
              <br />
              2024/2023
            </h2>

          </div>
          <div className="input-container max-w-[800px] p-4 ">
            <div>
              <Input value={id} onChange={(e) => {
                setID(e.target.value)
              }} id="idInput" type="text" label="ادخل الرقم القومى" />
              <p className="text-start text-slate-500 mt-3">
                يرجي ادخال الرقم القومي المسجل لدينا لاظهار معلومات الطالب
              </p>
              <Button onClick={() => naviagate()} className="w-full my-4" color="primary">
                اظهار
              </Button>
            </div>
          </div>
        </div>

        <div className=" absolute bottom-0 left-0 w-full">
        </div>
      </div>
    );
  }
}
