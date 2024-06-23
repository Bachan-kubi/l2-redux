/* eslint-disable react/prop-types */



const CounterWithFunc = ({count, setCount}) => {
    console.log(count)
    return (
        <div>
            <h2>FunctioalComponent</h2>
            {/* <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button> */}
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    );
};

export default CounterWithFunc;