import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <div className="sm:col-span-2">
            <div className="mt-2.5 flex gap-4 justify-center">
                <input
                    type="text"
                    name="company"
                    placeholder='Buscar'
                    className="block w-3/6 rounded-md border-0 px-3.5 py-2 focus:outline-none focus:border-secundarycolor-sc  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secundarycolor-sc sm:text-sm sm:leading-6"
                />
                <button
                    type="submit"
                    className="flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-secundarycolor-sc to-primarycolor-pc transition-all hover:from-primarycolor-pc hover:to-secundarycolor-sc hover:text-white"
                >
                    <FaSearch />
                </button>
            </div>
        </div>
    )
}

export default SearchInput