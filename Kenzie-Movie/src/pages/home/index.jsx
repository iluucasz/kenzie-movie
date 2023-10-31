import { DefaultHome } from "./section/defaultHome"
import { UserHome } from "./section/userHome"

export const Home = () => {
    return (
        <>
            <main>
                {/* <DefaultHome /> */}
                <UserHome />
            </main>
        </>
    )
}