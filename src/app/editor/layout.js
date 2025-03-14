import EditorSideBar from "@/component/EditorSideBar";



const layout = ({children}) =>{
    return (<div className="flex">
       <EditorSideBar />
        {children}
    </div>)
}

export default layout;