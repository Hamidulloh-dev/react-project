import Input from '../ui/Input'
import { FaPlus } from "react-icons/fa6";

const Step4 = () => {
    return (
        <>
            <Input
                label="Member's Email"
                inputClassName="border p-2 w-full"
                placeholder="memberemail@gmail.com"
                type="text"
            />
            <a href="#" className='flex items-center gap-x-3 text-[#3F8CFF] font-medium'>
                <FaPlus />
                <span>Add another Member</span>
            </a>
        </>
    )
}
export default Step4