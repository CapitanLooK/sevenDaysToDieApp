"use client";
import { useState, ChangeEvent } from "react"
import { sevenDaysData } from "@/data/sevenDaysData";
import { ResultComponent } from "../ResultComponent/ResultComponent";
import { errorMessage, inputPlaceholder, searchText} from "@/data/messages";
import { Cards } from "../Cards/Cards";

export const SearchInput = () => {

  const [inputValue, setInputValue] = useState<number>(0);
  const [result, setResult] = useState<number | string | JSX.Element>("");
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue: number = Number(value);

    if (value === '' || isNaN(numberValue) || numberValue >= 9686) {
      setDisabled(true)
      setError(errorMessage);
      setResult('');

    } else {
      setDisabled(false)
      setError(null);
      setInputValue(numberValue);
    }

    event.preventDefault()
  };

  const bloodMoonSearch = () => {
    const nextBloodMoon: number | undefined = sevenDaysData.find((num) => num > inputValue);
    const daysLeft = nextBloodMoon! - inputValue;
    const isBloodMoon = sevenDaysData.includes(inputValue)

    if (isBloodMoon) {
      setResult(<Cards nextBloodMoon={nextBloodMoon! - 7}/>);
      setDisabled(true)
    } else {
      setResult(daysLeft);
    }

  };

  return (
    <div className="max-w-2xl mx-auto">
      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">{searchText}</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search"
            id="search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={inputPlaceholder}
            required
            autoComplete="off"
            onChange={(event) => { handleInputChange(event) }}
          />
          <button
            onClick={(event) => { event.preventDefault(); bloodMoonSearch() }}
            disabled={disabled}
            type="submit" className={disabled ? 'hidden' : "text-white absolute right-2.5 bottom-2.5 bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-900 dark:hover:bg-red-700 dark:focus:ring-red-800"}>{searchText}</button>
        </div>
      </form>
      <ResultComponent result={result} error={error} />
    </div>
  )
}