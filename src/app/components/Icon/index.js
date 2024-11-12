import Image from "next/image"

export default function Icon(){
    return<>
      <div className="text-warnig d-flex align-items-center mx-5 ml-4">
        <Image src={'/logo.png'} width={'60'} height={'50'} className="logo" alt="logo"/>
        <h5 className="px-3 py-3 fw-light">Jftech</h5>
      </div>
    </>
}