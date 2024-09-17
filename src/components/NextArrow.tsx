import { IoIosArrowForward } from "react-icons/io";
import { CustomArrowProps } from "react-slick";




export const SampleNextArrow = (props: CustomArrowProps) => {

    const { className, onClick } = props;

    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <IoIosArrowForward className="arrows" style={{ color: "white" }} />
        </div>
    )
}


