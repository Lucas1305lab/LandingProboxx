import { Sidebar } from "./sidebar"


// eslint-disable-next-line react/prop-types
export const RootLayout = ({children}) => {
  return (
    <div className="flex gap-5">
        <Sidebar/>
        <main className="max-w-5xl flex-1 mx-auto py-4"> {children} </main>
    </div>
  )
}
