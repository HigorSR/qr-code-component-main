import Image from "next/image";
import qr_code from "../../public/image-qr-code.png"

export function Card() {
    return (
        <div className="bg-white rounded-3xl p-4 w-[330px]">
            <Image src={qr_code} alt="qr-code image" className="rounded-2xl mb-6" />
            <h1 className="text-Dark-blue text-2xl font-bold text-center mb-4 font-">Improve your front-end skills by building projects</h1>
            <p className="text-Grayish-blue text-center px-5 mb-6 leading-5">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}