import { IoIosArrowBack } from "react-icons/io";
import { CustomArrowProps } from "react-slick";



export const SamplePrevArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <IoIosArrowBack className="arrows" style={{ color: "white" }} />
        </div>
    )
}