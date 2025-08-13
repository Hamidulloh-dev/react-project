import Input from '../ui/Input'

const Step3 = () => {
    return (
        <>
            <Input
                label="Your Company's Name"
                inputClassName="border p-2 w-full"
                placeholder="Company's Name"
                type="text"
            />

            <Input
                label="Business Direction"
                inputClassName="border p-2 w-full"
                placeholder="IT and programming"
                type="text"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-[#7D8592] font-medium text-lg">
                How many people in your team?
              </h2>
              <div className="grid grid-cols-4 gap-3">
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-white text-[#7D8592] border-gray-300 hover:border-blue-400">
                  Only me
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-white text-[#7D8592] border-gray-300 hover:border-blue-400">
                  2 - 5
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-white text-[#7D8592] border-gray-300 hover:border-blue-400">
                  6 - 10
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-white text-[#7D8592] border-gray-300 hover:border-blue-400">
                  11 - 20
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-white text-[#7D8592] border-gray-300 hover:border-blue-400">
                  21 - 40
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-blue-500 text-white border-blue-500">
                  41 - 50
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-white text-[#7D8592] border-gray-300 hover:border-blue-400">
                  51 - 100
                </button>
                <button className="px-4 py-2 border rounded-lg text-sm font-medium bg-white text-[#7D8592] border-gray-300 hover:border-blue-400">
                  101 - 500
                </button>
              </div>
            </div>
        </>
    )
}
export default Step3