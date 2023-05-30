export const ResultComponent = ({result, error} : {result: string | number | JSX.Element, error: string | null} )=>{

    return(
        <div className='flex justify-center mt-8'>
       { error? (error && <p className="text-red-500">{error}</p>) : (typeof result === "number"
              ? `Faltan ${result} dias para la proxima luna de sangre`
              : result)}
        
        </div>
    )
}