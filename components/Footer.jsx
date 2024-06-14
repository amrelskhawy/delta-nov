import Logo from '@/public/logo.png'
import Image from "next/image";


export default function Footer() {
  return(
    <footer className="footer">
          <div className="sm:flex grid justify-center sm:items-center sm:justify-around gap-4">
            <div className="kafr">
              <h5 className="text-xl font-bold mb-4 "> فرع كفر الشيخ </h5>
              <p>
                عماره رقم 2 - عمارات الاوقاف - بجوار مسجد الاستاد
              </p>
              <p className="text-lg">
                01016393992
                - 01093944992
              </p>
            </div>
            <div className="bg-white mx-auto w-fit h-fit  rounded-full">
              <Image src={Logo} width={80} h={80} />
            </div>
            <div className="dessouq">
              <h5 className="text-xl font-bold mb-4 "> فرع دسوق </h5>
              <p>
                شارع الاستاد - أمام مدرسة الزراعه مباشرة - أعلى شركة نور داك للسياحة
              </p>
              <p className="text-lg">
                01016393992
                - 01093944992
              </p>
            </div>
          </div>
        </footer>
  )
}