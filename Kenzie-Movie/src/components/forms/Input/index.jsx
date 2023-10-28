import { forwardRef } from "react"

export const Input = forwardRef (({ label, error, ...rest}, ref) => {
    return (
        <div>
            <label>
                {label}
                <input className="inputBox" ref={ref} {...rest} />
            </label>
            {error ? (<span>{error.message}</span>) : null}
        </div>
    )
});