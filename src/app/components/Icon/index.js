import Image from "next/image"

export default function Icon(){
    return<>
      <div className="text-warnig d-flex align-items-center" id="icon-logo" >
        <Image src={'/logo.png'} width={'40'} height={'40'} className="logo" alt="logo"/>
        <h5 className="px-3 py-3 fw-light">Jftech</h5>
      </div>
    </>
}