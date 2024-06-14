import Image from "next/image";
import Logo from '@/public/logo.png'
export default function Header() {
  return (
    <header className="header">
        <div className="flex w-full justify-between items-center" >
            <div >
                <h2 className="text-2xl font-bold">أكاديمية الدلـتا</h2>
                <p>للتدريب و التنمية البشريـة</p>
            </div>
           <div className="bg-white  rounded-full">
            <Image src={Logo} width={80} h={80} />
           </div>
        </div>
    </header>
  );
}
