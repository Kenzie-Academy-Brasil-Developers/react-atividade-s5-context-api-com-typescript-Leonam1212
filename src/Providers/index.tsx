import { CartProvider } from "./Cart";
import { ReactNode } from "react"

interface IProvidersProp {
    children: ReactNode
}

const Providers = ({children}: IProvidersProp ) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}
export default Providers