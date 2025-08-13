import Input from '../ui/Input'

const Step2 = () => {
    return (
        <>
            <Input
                  label="Why will you use the service?"
                  inputClassName="border p-2 w-full"
                  placeholder="Work"
                  type="text"
            /> 
            <Input
                  label="What describes you best?"
                  inputClassName="border p-2 w-full"
                  placeholder="Business Owner"
                  type="text"
            />
            <div className='flex gap-x-16'>
                <span>What describes you best?</span>
                <div className='flex gap-x-2 justify-center'>
                    <input type="radio" />
                    <span>Yes</span>
                </div>
                <div className='flex gap-x-2 justify-center'>
                    <input type="radio" />
                    <span>No</span>
                </div>
            </div>
        </>
    )
}
export default Step2